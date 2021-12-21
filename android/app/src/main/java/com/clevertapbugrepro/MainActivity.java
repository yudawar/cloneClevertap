package com.clevertapbugrepro;

import com.facebook.react.ReactActivity;

import com.clevertap.react.CleverTapModule;

import android.os.Bundle;

// https://developer.clevertap.com/docs/android#section-app-inbox
// import com.clevertap.android.sdk.CTInboxActivity;
// import com.clevertap.android.sdk.CTInboxListener;
// import com.clevertap.android.sdk.CTInboxStyleConfig;
import com.clevertap.android.sdk.CleverTapAPI;
// import com.clevertap.android.sdk.CleverTapInstanceConfig;
// https://developer.clevertap.com/docs/android#section-app-inbox ^^^

public class MainActivity extends ReactActivity {

	/**
	 * Returns the name of the main component registered from JavaScript. This is
	 * used to schedule
	 * rendering of the component.
	 */
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// CleverTapAPI cleverTapDefaultInstance =
		// CleverTapAPI.getDefaultInstance(getApplicationContext());
		// if (cleverTapDefaultInstance != null) {
		// // Set the Notification Inbox Listener
		// cleverTapDefaultInstance.setCTNotificationInboxListener(getApplicationContext());
		// // Initialize the inbox and wait for callbacks on overridden methods
		// cleverTapDefaultInstance.initializeInbox();
		// }
		super.onCreate(savedInstanceState);
		CleverTapModule.setInitialUri(getIntent().getData());
	}

	@Override
	protected String getMainComponentName() {
		return "clevertapBugRepro";
	}
}
