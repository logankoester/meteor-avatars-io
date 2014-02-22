Package.describe({
  summary: "Meteor client for the Avatars.io hosted user avatar service"
});

Npm.depends({ 'avatars.io': '0.1.6' });

Package.on_use(function (api, where) {
  api.add_files('avatars-io.js', 'server');
});
