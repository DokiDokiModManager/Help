# Packaging your mod

Doki Doki Mod Manager is compatible with most mods out of the box, with no extra configuration required. However, feel free to refer to this article for information on how to package your mod.

## Recommended setup (DDLC Mod Template)

For almost all mods, the [DDLC Mod Template](https://github.com/Monika-After-Story/DDLCModTemplate) (or one of its derivatives) is recommended. Using the **DDLC Compatible Mod** export format in Ren'Py's **Build Distributions** menu will produce a mod which is compatible with Doki Doki Mod Manager.

## Other compatible formats

**Mods that use these formats will _probably_ work, but aren't recommended.**

### Standalone .rpa files

If your mod only changes the `scripts.rpa` file, you can distribute your mod as a `.rpa` file without the need to compress it. However, if your mod has more than one file, this will not work. This also prevents you from including [metadata or backgrounds](../developers/metadata.md) with your mod.

### Other .zip file formats

If your mod doesn't follow the DDLC Mod Template file structure, but still includes all the necessary files, it should still work with Doki Doki Mod Manager.

### Other archive formats

Your mod can also be packaged in `.rar` and `.7z` formats, and Doki Doki Mod Manager will read the contents as if it were a `.zip` file. However, this is generally a bad idea, especially since some players (i.e. those without Doki Doki Mod Manager) may not have the software required to open your mod.

## Incompatible formats

**Mods that use these formats will definitely not work.**

### Nested archives

If your mod, for example, is contained in a `.zip` file inside another `.zip` file, it will not install correctly. There is almost never any good reason to package your mod like this.

### "Inverse mods"

Mods that require you to install DDLC's game files into the mod folder, rather than the other way round, are not supported. This usually only happens if your mod uses a different version of Ren'Py than DDLC, which is unnecessary for the vast majority of mods.
