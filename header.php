<?php ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> >
  <head>
    <title>
      <?php wp_title(''); ?>
    </title>
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_bloginfo('template_url') ?>/assets/img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_bloginfo('template_url') ?>/assets//img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_bloginfo('template_url') ?>/assets//img/favicons/favicon-16x16.png">
    <link rel="manifest" href="<?php echo get_bloginfo('template_url') ?>/assets//img/favicons/manifest.json">
    <link rel="mask-icon" href="<?php echo get_bloginfo('template_url') ?>/assets//img/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class('fade-outxx'); ?>>
  <header class="wow slideInLeft">
  <div class="menu-mobile wow flip">
    <a id="header__button" class="hamburger" href="#">
      <div class="hamburger__inner"></div>
    </a>
  </div>
  <a href="#home" data-menu-top="0" title="" rel="home" class="logo">DV</a>
  <h1 class="slogan">Desarrollador de sitios web</h1>
  <a class="waves-effect waves-light linkedin" href="https://www.linkedin.com/in/diego-velasquez-web/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
  <a class="contact waves-effect waves-light open-contact wow "><i class="fa fa-envelope-o" aria-hidden="true"></i><span>Contacto</span></a>
</header>
