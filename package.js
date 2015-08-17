Package.describe({
	summary: "Stripe.js and Node-Stripe brought to Meteor.",
	version: "2.1.0",
	name: "kayla:stripe",
	git: "https://github.com/kayla-tech/stripe-meteor.git"
});

Npm.depends({ "stripe": "3.2.0" });

Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	if (api.export) api.export('STRIPEMETEOR');
	api.use(['templating'], 'client');
	api.addFiles('stripe_client.html', 'client');
	api.addFiles('stripe_server.js', 'server');
});

Package.on_test(function(api) {
	api.use(['tinytest','mrgalaxy:stripe']);
	api.add_files([ "tests/client.js" ], 'client');
	api.add_files([ "tests/server.js" ], 'server');
});
