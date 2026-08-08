from __future__ import annotations

import argparse
import asyncio
import subprocess
from pathlib import Path

import edge_tts
from mutagen.id3 import COMM, TALB, TCON, TDRC, TIT2, TPE1, ID3, ID3NoHeaderError


DEFAULT_SOURCE = Path("docs/SERVICEOS_10MIN_AUDIO_SCRIPT_FA.md")
DEFAULT_OUTPUT = Path("public/audio/serviceos-overview-10min-fa.mp3")


def narration_text(markdown: str) -> str:
    lines: list[str] = []
    for raw_line in markdown.replace("\r\n", "\n").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#"):
            continue
        lines.append(line)
    return "\n\n".join(lines)


def write_tags(output: Path) -> None:
    try:
        tags = ID3(output)
    except ID3NoHeaderError:
        tags = ID3()
    for frame in ("TIT2", "TPE1", "TALB", "TDRC", "TCON", "COMM"):
        tags.delall(frame)
    tags.add(TIT2(encoding=3, text="ServiceOS؛ از سؤال تا انجام خدمت"))
    tags.add(TPE1(encoding=3, text="ServiceOS"))
    tags.add(TALB(encoding=3, text="نقشه اجرای کامل ServiceOS"))
    tags.add(TDRC(encoding=3, text="2026"))
    tags.add(TCON(encoding=3, text="Podcast"))
    tags.add(COMM(encoding=3, lang="fas", desc="summary", text="نسخه صوتی کوتاه نقشه محصول و اجرای ServiceOS"))
    tags.save(output, v2_version=3)


async def synthesize(source: Path, output: Path, voice: str, rate: str) -> None:
    text = narration_text(source.read_text(encoding="utf-8"))
    output.parent.mkdir(parents=True, exist_ok=True)
    raw_output = output.with_name(f"{output.stem}.raw{output.suffix}")
    communicator = edge_tts.Communicate(text=text, voice=voice, rate=rate)
    await communicator.save(str(raw_output))
    subprocess.run(
        [
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
            "-i", str(raw_output),
            "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
            "-ar", "24000", "-ac", "1", "-b:a", "64k",
            "-id3v2_version", "3", str(output),
        ],
        check=True,
    )
    raw_output.unlink(missing_ok=True)
    write_tags(output)


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate the short Persian ServiceOS audio guide.")
    parser.add_argument("--source", type=Path, default=DEFAULT_SOURCE)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--voice", default="fa-IR-FaridNeural")
    parser.add_argument("--rate", default="+9%")
    parser.add_argument("--tags-only", action="store_true")
    args = parser.parse_args()
    if args.tags_only:
        write_tags(args.output)
    else:
        asyncio.run(synthesize(args.source, args.output, args.voice, args.rate))


if __name__ == "__main__":
    main()
