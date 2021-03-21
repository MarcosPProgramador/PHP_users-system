<?php
class userRepository extends repository {
    public function findUsers() {
        return $this->find('users');

    }
}
