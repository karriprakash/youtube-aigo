class AuthAgent:
    def __init__(self):
        pass

    def get_auth_url(self):
        # TODO: Return Google OAuth2 URL
        return "https://accounts.google.com/..."

    def exchange_code(self, code: str):
        # TODO: Exchange code for tokens
        return {"access_token": "mock_token", "refresh_token": "mock_refresh"}
