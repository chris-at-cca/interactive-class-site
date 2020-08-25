
<?php snippet('header') ?>

<?php if($cover = $page->images()->template('cover')->first()): ?>
     <img src="<?= $cover->url() ?>" alt="">
<?php endif ?>

<div id="project-description">
	
	<!-- project info -->
	<h1><?= $page->title() ?></h1>	
	<div class="project-meta">
		<?php if($page->student()->isNotEmpty()): ?>
			<span class="student"><?= $page->student() ?></span>
		<?php endif ?>
		<?php if($page->class()->isNotEmpty()): ?>
			<span class="class"><?= $page->class() ?></span>
		<?php endif ?>
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

	<?php foreach($page->files() as $file): ?>
		<?php if($file->type() == 'audio'): ?>
			<audio controls>
  				<source src="<?= $file->url() ?>" type="<?= $file->mime() ?>">
			</audio>
			<div class="file-meta">
				<span class="file-info"><?= $file->title() ?></span>
				<span class="file-info"><?= $file->niceSize() ?></span>
			</div>
		<?php endif ?>

		<?php if($file->type() == 'video'): ?>
			<video controls>
		  		<source src="<?= $file->url() ?>" type="<?= $file->mime() ?>">
			</video>
			<div class="file-meta">
				<span class="file-info"><?= $file->title() ?></span>
				<span class="file-info"><?= $file->niceSize() ?></span>
			</div>
		<?php endif ?>

		<?php if($file->type() == 'document'): ?>
			<a href="<?= $file->url() ?>"><?= $file->name() ?></a>
			<div class="file-meta">
				<span class="file-info"><?= $file->title() ?></span>
				<span class="file-info"><?= $file->niceSize() ?></span>
			</div>
		<?php endif ?>
	<?php endforeach ?>

	<!-- tags -->
	<ul class="tags">
	<?php foreach ($page->tags()->split() as $tag): ?>
  		<li>
  			<a class="tag" href="<?php echo url('projects/tag:' . urlencode($tag)) ?>" class="tag"><?= $tag ?></a>
  		</li>
	<?php endforeach ?>
	</ul>

</div>


<?php snippet('footer') ?>