Package.describe({
    summary: "FlowType.JS smart package for Meteor"
});

Package.on_use(function(api, where) {
    api.use('jquery', "client")
    api.add_files('lib/jq.flowtype_v1.0.js', 'client');
});
