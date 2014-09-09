doubletaptogo
=============

When you tap the menu parent item for the first time, DoubleTapToGo prevents the browser from opening a new URL but allows that if tapped once again in succession. If there is an intermediate tap(s) between the first one and the second the counter resets. 

Considering the markup above, the plugin should be only applied to the items that are parents – in order to avoid double-tap requirement on drop-down-less items:

```$( '#nav li:has(ul)' ).doubleTapToGo();```
