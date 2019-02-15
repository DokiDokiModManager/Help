---
title: Achievements with the SDK
---

The Doki Doki Mod Manager SDK gives developers access to special features, exclusive to DDMM. Here's how to install it.

## Download the SDK

Link to latest version: [https://raw.githubusercontent.com/DokiDokiModManager/SDK/master/ddmm_sdk.rpy](https://raw.githubusercontent.com/DokiDokiModManager/SDK/master/ddmm_sdk.rpy)

Download the latest version of the SDK, and save it as a `.rpy` in your mod's game directory. The name doesn't matter, 
but it'd be sensible to choose a name like `ddmm_sdk.rpy`.

## Enable mod metadata

Even though the current default is to use the SDK server at all times, using it without specifying support is deprecated.
You need to use a `ddmm-mod.json` file with `uses_sdk` set to `true`. For more information, see [the Mod Metadata article](mod-metadata.html).

## Register achievements

Your achievements need to be registered before they can be earned. This should be done in an `init` block - these typically
go in the `overrides.rpy` file. See the example below:

    init 10 python:
      ddmm_register_achievement("ACHIEVEMENT_1", "Achievement Name", "Achievement Description")
      ddmm_register_achievement("ACHIEVEMENT_2", "Achievement Name 2", "Achievement Description 2")

## Grant achievements

When a user has earned an achievement, you must let the SDK know. The player will only be notified the first time they earn the achievement,
so even if the criteria for an achievement is met more than once, there will be only one notification.

    $ ddmm_earn_achievement("ACHIEVEMENT_1")
    
## API Reference

### ddmm_register_achievement(id, name, description)

Function - registers an achievement.

* id (string) = the unique identifier for your achievement, used in code (e.g. `MY_ACHIEVEMENT_1`)
* name (string) = the user-facing name of the achievement (e.g. `My Achievement`)
* description (string) = the user-facing description of the achievement, usually a description of how to earn it (e.g. `Complete Monika's route`)

### ddmm_earn_achievement(id)

Function - grants the user an achievement. Note that if the achievement has not been registered, an error will occur.

* id (string) = the ID passed to `ddmm_register_achievement`

### ddmm_online

Variable - `True` if the mod was launched through DDMM, `False` otherwise.
 