from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
from matplotlib import font_manager
from matplotlib.patches import FancyBboxPatch, Rectangle


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

FONT_PATHS = [
    "/System/Library/Fonts/Supplemental/AppleGothic.ttf",
    "/opt/X11/share/system_fonts/Supplemental/AppleGothic.ttf",
]

for font_path in FONT_PATHS:
    if Path(font_path).exists():
        font_manager.fontManager.addfont(font_path)
        plt.rcParams["font.family"] = "AppleGothic"
        break

plt.rcParams["axes.unicode_minus"] = False

BLUE = "#0071e3"
GREEN = "#1f9d55"
AMBER = "#b7791f"
RED = "#d92d20"
INK = "#1d1d1f"
MUTED = "#6b7280"
BORDER = "#d1d5db"
PAPER = "#ffffff"
SOFT = "#f8f9fa"


def rounded_box(ax, xy, width, height, label, sub="", color=BLUE, face=PAPER, title_size=17, sub_size=11):
    box = FancyBboxPatch(
        xy,
        width,
        height,
        boxstyle="round,pad=0.018,rounding_size=0.035",
        linewidth=1.4,
        edgecolor=color,
        facecolor=face,
    )
    ax.add_patch(box)
    x, y = xy
    ax.text(x + width / 2, y + height * 0.62, label, ha="center", va="center", fontsize=title_size, weight="bold", color=INK)
    if sub:
        ax.text(x + width / 2, y + height * 0.32, sub, ha="center", va="center", fontsize=sub_size, color=MUTED)


def save(fig, name):
    fig.savefig(OUT / name, dpi=180, bbox_inches="tight", facecolor="white")
    plt.close(fig)


def report_pipeline():
    fig, ax = plt.subplots(figsize=(13, 4.8))
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis("off")
    ax.text(0.02, 0.93, "Lecture 01-10 Learning Pipeline", fontsize=24, weight="bold", color=INK)
    ax.text(0.02, 0.86, "Prompting, data cleaning, visualization, document summary, and report generation become one repeatable workflow.", fontsize=12, color=MUTED)

    steps = [
        ("01-02", "AI Briefing", "prompt rules"),
        ("03-04", "Data Prep", "merge + clean"),
        ("05-08", "Visualization", "charts + patterns"),
        ("09", "Evidence", "manual summary"),
        ("10", "Report", "Markdown + HTML"),
    ]
    colors = [BLUE, "#2563eb", GREEN, AMBER, RED]
    x0 = 0.035
    w = 0.168
    gap = 0.026
    y = 0.40
    for i, (no, title, sub) in enumerate(steps):
        x = x0 + i * (w + gap)
        rounded_box(ax, (x, y), w, 0.25, title, f"{no} | {sub}", colors[i], "#ffffff", title_size=14, sub_size=8.5)
        if i < len(steps) - 1:
            ax.annotate("", xy=(x + w + gap * 0.75, y + 0.125), xytext=(x + w + gap * 0.18, y + 0.125), arrowprops=dict(arrowstyle="->", lw=2, color="#9ca3af"))

    ax.add_patch(Rectangle((0.035, 0.17), 0.90, 0.08, facecolor="#f0f7ff", edgecolor=BORDER, linewidth=1))
    ax.text(0.05, 0.21, "Final Output: weekly/monthly engineering report with KPI snapshot, evidence, and action items", fontsize=13, color=INK, va="center")
    save(fig, "report_pipeline.png")


def weekly_dashboard():
    fig = plt.figure(figsize=(12, 7))
    gs = fig.add_gridspec(2, 3, height_ratios=[1, 1.15], width_ratios=[1.05, 1.05, 0.9], hspace=0.34, wspace=0.28)
    fig.suptitle("Weekly Process Report Snapshot", x=0.05, y=0.98, ha="left", fontsize=24, weight="bold", color=INK)

    ax1 = fig.add_subplot(gs[0, :2])
    weeks = np.arange(1, 7)
    yield_rate = np.array([92.1, 92.8, 91.9, 93.2, 93.4, 94.8])
    ax1.plot(weeks, yield_rate, marker="o", color=BLUE, lw=3)
    ax1.fill_between(weeks, yield_rate, 91, color="#dbeafe", alpha=0.8)
    ax1.set_title("Yield Trend", loc="left", fontsize=14, weight="bold")
    ax1.set_ylim(91, 95.5)
    ax1.set_xticks(weeks)
    ax1.set_xlabel("Week")
    ax1.set_ylabel("%")
    ax1.grid(axis="y", color="#e5e7eb")

    ax2 = fig.add_subplot(gs[0, 2])
    labels = ["Particle", "Scratch", "Mura", "CD", "Etch"]
    vals = [41, 23, 17, 11, 8]
    ax2.barh(labels[::-1], vals[::-1], color=[BLUE, GREEN, AMBER, "#94a3b8", RED][::-1])
    ax2.set_title("Defect Pareto", loc="left", fontsize=14, weight="bold")
    ax2.set_xlabel("%")
    ax2.grid(axis="x", color="#e5e7eb")

    ax3 = fig.add_subplot(gs[1, 0])
    alarms = [2, 5, 1, 8]
    tools = ["CVD-02", "ETCH-03", "PHOTO-01", "CMP-04"]
    ax3.bar(tools, alarms, color=[GREEN, RED, BLUE, AMBER])
    ax3.set_title("Equipment Alarms", loc="left", fontsize=14, weight="bold")
    ax3.set_ylabel("count")
    ax3.tick_params(axis="x", rotation=18)
    ax3.grid(axis="y", color="#e5e7eb")

    ax4 = fig.add_subplot(gs[1, 1:])
    ax4.axis("off")
    rows = [
        ("Risk", "ETCH-03 pressure drift repeated twice", RED),
        ("Evidence", "Particle defect rose to 41% of total defects", AMBER),
        ("Action", "Check chamber cleaning log and lot path", BLUE),
        ("Owner", "Process ENG + Equipment ENG by Friday", GREEN),
    ]
    for i, (k, v, c) in enumerate(rows):
        y = 0.82 - i * 0.22
        rounded_box(ax4, (0.02, y - 0.09), 0.18, 0.14, k, "", c, "#ffffff")
        ax4.text(0.25, y - 0.02, v, fontsize=14, color=INK, va="center")
    save(fig, "weekly_dashboard.png")


def report_template():
    fig, ax = plt.subplots(figsize=(12.5, 6.4))
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis("off")
    ax.text(0.03, 0.93, "One Source, Two Report Formats", fontsize=24, weight="bold", color=INK)
    ax.text(0.03, 0.86, "Fixed calculations feed both a Markdown draft and a shareable HTML page.", fontsize=12, color=MUTED)

    rounded_box(ax, (0.05, 0.50), 0.22, 0.22, "Input Data", "CSV + manual note", BLUE, "#f0f7ff")
    rounded_box(ax, (0.39, 0.50), 0.22, 0.22, "Report Engine", "metrics + charts + LLM text", GREEN, "#f1fbf5")
    rounded_box(ax, (0.73, 0.63), 0.20, 0.16, "Markdown", "review draft", AMBER, "#fff8e6")
    rounded_box(ax, (0.73, 0.38), 0.20, 0.16, "HTML", "team sharing", RED, "#fff2f2")

    ax.annotate("", xy=(0.38, 0.61), xytext=(0.28, 0.61), arrowprops=dict(arrowstyle="->", lw=2.5, color="#9ca3af"))
    ax.annotate("", xy=(0.72, 0.71), xytext=(0.62, 0.62), arrowprops=dict(arrowstyle="->", lw=2.5, color="#9ca3af"))
    ax.annotate("", xy=(0.72, 0.46), xytext=(0.62, 0.59), arrowprops=dict(arrowstyle="->", lw=2.5, color="#9ca3af"))

    for x, title, lines in [
        (0.06, "Required Blocks", ["Summary", "KPI snapshot", "Evidence charts", "Action items"]),
        (0.40, "Validation Rules", ["No number without source", "Hypothesis, not certainty", "Owner and due date"]),
        (0.70, "Review Output", ["3-minute read", "meeting-ready", "traceable next steps"]),
    ]:
        ax.text(x, 0.24, title, fontsize=14, weight="bold", color=INK)
        for j, line in enumerate(lines):
            ax.text(x, 0.18 - j * 0.045, f"- {line}", fontsize=11.5, color=MUTED)
    save(fig, "report_template.png")


if __name__ == "__main__":
    report_pipeline()
    weekly_dashboard()
    report_template()
