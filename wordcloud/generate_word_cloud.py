from wordcloud import WordCloud
import matplotlib.pyplot as plt

text = open("titles.txt").read()

# Generate word cloud
wordcloud = WordCloud(width=800, height=400, background_color='white').generate(text)

# Save as SVG
svg_file = "wordcloud.svg"
with open(svg_file, "w") as f:
    f.write(wordcloud.to_svg())

print(f"Word cloud saved as {svg_file}.")