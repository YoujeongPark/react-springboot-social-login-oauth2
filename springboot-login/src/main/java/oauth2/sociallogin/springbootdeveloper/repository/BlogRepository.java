package oauth2.sociallogin.springbootdeveloper.repository;

import oauth2.sociallogin.springbootdeveloper.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Article, Long> {
}

