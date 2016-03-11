Package.describe({
    name:'nerdmed:select2-full',
    summary: 'Select2 is a jQuery based replacement for select boxes.',
    version: '4.0.1',
    git: 'https://github.com/nate-strauser/meteor-select2.git'
});

Package.on_use(function(api) {
    api.versionsFrom('1.2.1');
    api.use('jquery', 'client');

    api.add_files([
        'lib/select2/select2.js'
    ], 'client', {bare: true});

    api.add_files([
        'lib/select2/select2.css',
        'lib/select2/select2-bootstrap.css'
    ], 'client');
});
