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
        ScriptName = "build",
        WorkingDirectory = "./"
    });

    });

Task("Deploy-Frontend")
	.IsDependentOn("Validate-Arguments")
	.WithCriteria(() => environment != "Local")
	.IsDependentOn("Build-Frontend")
	.Does(() =>
{

	var sourcePath =  MakeAbsolute(Directory("./dist/")).FullPath;
	var destinationPath = environment + "-komponentkartan";


		MsDeploy(new MsDeploySettings
	{
		Verb = Operation.Sync,
		AllowUntrusted = true,
		Source = new IisAppProvider
		{
			Direction = Direction.source,
			Path = sourcePath
		},
		Destination = new IisAppProvider
		{
			Direction = Direction.dest,
			Path = destinationPath,
			WebManagementService = deployServer,
			Username = "deploy",
			Password = "Spring2017!"
		}
	});
});

Task("Default")
	.IsDependentOn("Deploy-Frontend");

RunTarget(target);