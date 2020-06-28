# Developer Mode

::: danger
**Do not enable developer mode unless you know exactly what you're doing!** You could end up damaging your mods or Doki Doki Mod Manager itself.

If you aren't trying to write code for Doki Doki Mod Manager, or haven't been told to enable developer mode as a troubleshooting step, you almost certainly don't need to be here.

If you lose any data this way, it's entirely on you. Although it was entirely on you already.
:::

Set the environment variable `DDMM_DEVELOPER` to any value to enable developer mode. This will do the following:

* Expose the **Experiments** tab.
* Enable most of Electron's keyboard shortcuts, including those for Developer Tools (CTRL+SHIFT+I)
* Set the window title to include "Developer Mode"

You can unset the environment variable to disable developer mode. Note that you will need to restart the application for this to take effect.
