#addin "Cake.MsDeploy"
#addin "Cake.Npm"

var environment = Argument("environment", "Local");
var target = Argument("target", "Default");
var deployServer = string.Empty;

Task("Validate-Arguments")
	.Does(() =>
{
	switch(environment)
	{
		case "Local":
			break;
		case "Test":
			deployServer = "vgwb0399";
			break;
		case "Demo":
			deployServer = "vgwb0399";
			break;
		default:
			throw new Exception(string.Format(
				"{0} is not a valid environment. Valid environments are: Local, Test, Demo.",
				environment));
	}

		Verbose("Environment: {0}", environment);
});

Task("Install-Latest-KomponentkartanPackage")
   .Does(() =>
	{
		 NpmRunScript(new NpmRunScriptSettings
    	{
			ScriptName = "install-demo",
			WorkingDirectory = "./"
		});
	});


Task("Restore-NpmPackages")
   .Does(() =>
	{
		NpmInstall(new NpmInstallSettings
    	{
        	WorkingDirectory = "./",
			Production = false
    	});
	});

Task("Build-Frontend")
.IsDependentOn("Restore-NpmPackages")
.Does(() => {
      NpmRunScript(new NpmRunScriptSettings
    {
        ScriptName = "build-prod",
        WorkingDirectory = "./"
    });

	});

Task("Default").IsDependentOn("Build-Frontend");

RunTarget(target);