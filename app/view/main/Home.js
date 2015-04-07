Ext.define('App1.view.main.Home', {
	extend : 'Ext.Panel',
	alias: 'widget.home',

	title : i18n.main.home.tabTitle,
	closable: false,
	padding: 50,

	html: i18n.main.home.content

});
