<?php snippet('header') ?>

<h1 id="title">
	<?= $page->title() ?>	
</h1>

<div id="text">
	<?= $page->text()->kirbytext() ?>
</div>

<?php snippet('footer') ?>