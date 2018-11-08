package com.toxin.fullback;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContactRepository extends CrudRepository<Contact, String> {

    @Override
    Optional<Contact> findById(String uuid);

    @Override
    void delete(Contact deleted);

}
