<?php snippet('header') ?>

<h1 id="title">
	<?= $page->title() ?>	
</h1>

<div id="text">
	<?= $page->text()->kirbytext() ?>
</div>

<ul>

	<?php foreach (
		$site->children()->children()->listed()->shuffle() as $item
	): ?>
	<li>
		<a href="<?= $item->url() ?>">
			<span class="title"><?= $item->title() ?>&nbsp;</span> &rarr;
			<?php if($image = $item->image()): ?>
				<?= $item->image() ?>
			<?php endif ?>
			<p>
				<?= $item->excerpt()->kirbytext() ?>
			</p>	
		</a>
	</li>
	<?php endforeach ?>

</ul>


<?php snippet('footer') ?>