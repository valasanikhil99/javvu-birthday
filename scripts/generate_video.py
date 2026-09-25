import subprocess
import os

os.makedirs("public/videos", exist_ok=True)

scenes = [
    {
        "child": "Girl in maroon jacket",
        "subtitle": "Happy birthday Vikas Anna! 🎈",
        "sub2": "Birthday Food Donation Wishes • Givea.in",
        "bg_top": "#93c5fd",
        "shirt": "#831843",
    },
    {
        "child": "Boy in pink shirt",
        "subtitle": "Happy birthday Vikas Anna! 💖",
        "sub2": "Distributing warm meals to families • Givea.in",
        "bg_top": "#bae6fd",
        "shirt": "#f43f5e",
    },
    {
        "child": "Children smiling together",
        "subtitle": "Happy birthday Vikas Anna! 🎂🎉",
        "sub2": "Celebrating with warm meal boxes • Givea.in",
        "bg_top": "#fbcfe8",
        "shirt": "#0284c7",
    }
]

for idx, sc in enumerate(scenes):
    img_path = f"/tmp/frame_{idx}.jpg"
    sub_text = sc["subtitle"]
    sub2_text = sc["sub2"]
    cmd = [
        "convert", "-size", "720x1280", "xc:#fdf2f8",
        # Sky
        "-fill", sc["bg_top"], "-draw", "rectangle 0,0 720,440",
        # Sun
        "-fill", "#fef08a", "-draw", "circle 620,120 620,190",
        # Clay brick stacks
        "-fill", "#c2410c", "-draw", "rectangle 0,440 720,700",
        "-stroke", "#7c2d12", "-strokewidth", "2",
        "-draw", "line 0,490 720,490", "-draw", "line 0,540 720,540",
        "-draw", "line 0,590 720,590", "-draw", "line 0,640 720,640",
        "-stroke", "none",
        # Sandy ground
        "-fill", "#d97706", "-draw", "rectangle 0,700 720,1280",
        # Child silhouette / bust behind the card
        "-fill", sc["shirt"], "-draw", "roundrectangle 180,360 540,680 40,40",
        "-fill", "#b45309", "-draw", "circle 360,320 360,400",
        # White Givea Placard Card
        "-fill", "white", "-stroke", "#e2e8f0", "-strokewidth", "4",
        "-draw", "roundrectangle 60,480 660,940 24,24",
        "-stroke", "none",
        # Givea Logo
        "-fill", "#f97316", "-draw", "circle 540,525 540,538",
        "-fill", "#ec4899", "-draw", "circle 560,525 560,538",
        "-fill", "#4338ca", "-pointsize", "30", "-draw", "text 580,535 'Givea'",
        # Placard text
        "-fill", "#0f172a", "-pointsize", "38", "-draw", "text 100,590 'Happy birthday'",
        "-fill", "#0f172a", "-pointsize", "48", "-draw", "text 100,660 'Vikas Anna'",
        # Purple balloons
        "-fill", "#7e22ce", "-draw", "circle 130,760 130,795",
        "-fill", "#9333ea", "-draw", "circle 180,745 180,780",
        "-stroke", "#64748b", "-strokewidth", "3",
        "-draw", "line 130,795 155,850",
        "-draw", "line 180,780 155,850",
        "-stroke", "none",
        # Polaroid photo of Vikas Anna on right
        "-fill", "white", "-stroke", "#cbd5e1", "-strokewidth", "3",
        "-draw", "roundrectangle 400,580 620,820 12,12",
        "-stroke", "none",
        "-fill", "#1e293b", "-draw", "roundrectangle 415,595 605,770 6,6",
        "-fill", "#f8fafc", "-pointsize", "18", "-draw", "text 440,680 'Vikas Anna'",
        "-fill", "#f59e0b", "-pointsize", "22", "-draw", "text 495,730 '★ 🎂 ★'",
        # Gold quote
        "-fill", "#eab308", "-pointsize", "42", "-draw", "text 480,850 '“ ”'",
        # Website
        "-fill", "#475569", "-pointsize", "24", "-draw", "text 250,910 'www.givea.in'",
        # Top banner
        "-fill", "white", "-stroke", "#f43f5e", "-strokewidth", "3",
        "-draw", "roundrectangle 80,60 640,140 40,40",
        "-stroke", "none",
        "-fill", "#e11d48", "-pointsize", "26", "-draw", "text 120,110 'A Little Birthday Wish For You 🎂❤️'",
        # Bottom subtitle bar
        "-fill", "white", "-stroke", "#f59e0b", "-strokewidth", "3",
        "-draw", "roundrectangle 60,1020 660,1160 20,20",
        "-stroke", "none",
        "-fill", "#92400e", "-pointsize", "30", "-draw", f"text 90,1075 '{sub_text}'",
        "-fill", "#b45309", "-pointsize", "20", "-draw", f"text 90,1125 '{sub2_text}'",
        img_path
    ]
    subprocess.run(cmd, check=True)

# Generate 14-second video
filter_complex = (
    "[0:v]loop=loop=125:size=1:start=0,setpts=PTS-STARTPTS[v0];"
    "[1:v]loop=loop=125:size=1:start=0,setpts=PTS-STARTPTS[v1];"
    "[2:v]loop=loop=125:size=1:start=0,setpts=PTS-STARTPTS[v2];"
    "[v0][v1]xfade=transition=fade:duration=1:offset=4[v01];"
    "[v01][v2]xfade=transition=fade:duration=1:offset=8[vout]"
)

subprocess.run([
    "ffmpeg", "-y",
    "-i", "/tmp/frame_0.jpg",
    "-i", "/tmp/frame_1.jpg",
    "-i", "/tmp/frame_2.jpg",
    "-f", "lavfi", "-i", "anoisesrc=d=13:c=pink:r=44100:a=0.005,lowpass=f=300",
    "-filter_complex", filter_complex,
    "-map", "[vout]", "-map", "3:a",
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", "25",
    "-c:a", "aac", "-b:a", "96k",
    "-t", "13",
    "public/videos/givea-birthday-wish.mp4"
], check=True)

subprocess.run(["cp", "/tmp/frame_0.jpg", "public/videos/givea-poster.jpg"], check=True)
subprocess.run(["cp", "public/videos/givea-birthday-wish.mp4", "public/videos/surprise-video.mp4"], check=True)
print("Video generated successfully!")
