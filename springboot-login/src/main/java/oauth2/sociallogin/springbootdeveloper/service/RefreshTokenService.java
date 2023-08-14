package oauth2.sociallogin.springbootdeveloper.service;

import lombok.RequiredArgsConstructor;
import oauth2.sociallogin.springbootdeveloper.domain.RefreshToken;
import oauth2.sociallogin.springbootdeveloper.repository.RefreshTokenRepository;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class RefreshTokenService {
    private final RefreshTokenRepository refreshTokenRepository;

    public RefreshToken findByRefreshToken(String refreshToken) {
        return refreshTokenRepository.findByRefreshToken(refreshToken)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected token"));
    }
}

