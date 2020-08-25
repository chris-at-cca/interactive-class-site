<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?= $site->title() ?></title>

	<?= css([
		'assets/css/index.css'
	]) ?>

</head>
<body class="<?= $page->title() ?>">

<header>
	<a id="logo" href="<?= $site->url() ?>"><?= $site->title() ?></a>
	
	<!-- menu -->
	<ul class="menu">
		<?php foreach ($site->children()->listed() as $subpage): ?>
			<a href="<?= $subpage->url() ?>">
				<li><?= $subpage->title() ?></li>
			</a>
		<?php endforeach ?>
	</ul>

</header>

<div id="container">