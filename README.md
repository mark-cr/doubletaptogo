doubleTapToGo
=============
Originally by: Osvaldas Valutis, www.osvaldas.info

Prevents first tap (click) on multi level menu children on mobile devices.  This allows a standard coded dropdown menu to open a second level of the menu on mobile devices.

When you tap the menu parent item for the first time, DoubleTapToGo prevents the browser from opening a new URL but allows that if tapped once again in succession. If there is an intermediate tap(s) between the first one and the second the counter resets. 

Considering the markup above, the plugin should be only applied to the items that are parents – in order to avoid double-tap requirement on drop-down-less items:

```$( '#nav li:has(ul)' ).doubleTapToGo();```

If you prefer bower, use: ```bower install doubletaptogo``` to get it.
