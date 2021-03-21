<?php
class commentRepository extends repository {
    public function findComments() {
        return $this->find('comments');

    }
}
