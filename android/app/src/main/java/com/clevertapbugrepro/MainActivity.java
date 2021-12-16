package com.clevertapbugrepro;

import com.facebook.react.ReactActivity;

import com.clevertap.react.CleverTapModule;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
   @Override
	protected void onCreate(Bundle savedInstanceState) {
    	CleverTapModule.setInitialUri(getIntent().getData());
    	super.onCreate(savedInstanceState);
	}
  @Override
  protected String getMainComponentName() {
    return "clevertapBugRepro";
  }
}
