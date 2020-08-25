
<?php snippet('header') ?>

<?php if($cover = $page->images()->template('cover')->first()): ?>
     <img src="<?= $cover->url() ?>" alt="">
<?php endif ?>

<div id="project-description">
	
	<!-- project info -->
	<h1><?= $page->title() ?></h1>	
	<div class="project-meta">

		<?php if($page->year()->isNotEmpty()): ?>
			<span class="year"><?= $page->year() ?></span>
		<?php endif ?>

		<?php if($page->link_url()->isNotEmpty()): ?>
			<a href="<?= $page->link_url() ?>" class="link"><?= $page->link_text() ?></a>
		<?php endif ?>

	</div>

	<!-- text -->
	<div class="text">
		<?= $page->excerpt()->kirbytext() ?>	
	</div>
	

</div>


<?php snippet('footer') ?>