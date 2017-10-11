package org.jhipster.blog.repository;

import org.jhipster.blog.domain.Wish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Wish entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WishRepository extends JpaRepository<Wish, Long> {

    public Page<Wish> findByWishListUserLogin(String currentUserLogin, Pageable pageable);

}
