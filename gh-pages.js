import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/deepkush97/deepkush97.github.io.git', // Update to point to your repository
		user: {
			name: 'Deepanshu Kushwaha', // update to use your name
			email: 'kushwaha97deepanshu@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
