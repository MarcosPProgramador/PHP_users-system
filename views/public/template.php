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
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
    <!-- styles -->
    <link rel="stylesheet" href="./views/public/styles/global.min.css">
    
    <?php if ($this->setConfig('style')):?>
        <link rel="stylesheet" href="<?php echo $this->setConfig('style'); ?>">
    <?php endif ?>

    <!-- icon -->
    <link rel="shortcut icon" href="<?php echo $this->setConfig('icon'); ?>" type="image/png">
    <!-- title -->
    <title><?php echo $this->setConfig('title');?></title>
</head>
<body>
    <main>
        <?php
            $this->setConfig('header');
            $this->setConfig('section');
            $this->setConfig('footer'); 
        ?> 
    </main>

    <?php if ($this->setConfig('script')):?>
        <script src="<?php echo $this->setConfig('script')?>"></script>
    <?php endif ?>


</body>
</html>  