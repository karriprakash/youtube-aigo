class PerceptionAgent:
    def __init__(self):
        pass

    async def analyze_video(self, video_url: str):
        """
        Input: Video URL (local or cloud)
        Output: Transcript, Scene Detection, Chapter Markers
        """
        # TODO: Implement Gemini 3 Flash integration
        print(f"Analyzing video: {video_url}")
        return {
            "transcript": "Mock Transcript...",
            "scenes": [],
            "chapters": []
        }
