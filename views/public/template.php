<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <!-- SEO -->
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="robots" content="index, follow">
    <!-- fonts -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
    <!-- styles -->
    <link rel="stylesheet" href="<?php echo PATH?>views/public/assets/styles/global.min.css">

    <?php

    if ($this->setConfig('style')): ?>
<?php

foreach ($this->setConfig('style') as $value): ?>
            <link rel="stylesheet" href="<?php echo PATH.$value; ?>">
        <?php endforeach?>
<?php endif?>

    <!-- icon -->
    <link rel="shortcut icon" href="<?php echo PATH.$this->setConfig('icon'); ?>" type="image/png">
    <!-- title -->
    <title><?php echo PATH.$this->setConfig('title'); ?></title>
</head>

<body>
    <main>
        <?php
            $this->setConfig('header');
            $this->setConfig('section');
            $this->setConfig('footer');
        ?>
    </main>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="<?php echo PATH?>views/public/assets/js/global.js"></script>

    <?php

    if ($this->setConfig('script')): ?>
<?php

foreach ($this->setConfig('script') as $value): ?>
            <script src="<?php echo PATH . $value ?>"></script>
        <?php endforeach?>
<?php endif?>


</body>

</html>