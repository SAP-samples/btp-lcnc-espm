{
	"_Name": "ESPM",
	"Version": "/ESPM/Globals/AppDefinition_Version.global",
	"MainPage": "/ESPM/Pages/Overview.page",
	"OnLaunch": [
		"/ESPM/Actions/Service/Initialize.action"
	],
	"OnWillUpdate": "/ESPM/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/ESPM/Actions/Service/Initialize.action",
	"Styles": "/ESPM/Styles/Styles.less",
	"Localization": "/ESPM/i18n/i18n.properties"
}