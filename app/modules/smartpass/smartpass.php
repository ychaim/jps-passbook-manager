<?php

/**

{
  "formatVersion" : 1,
  "passTypeIdentifier" : "pass.myappmatrix.coupons",
  "serialNumber" : "E5982H-I2",
  "teamIdentifier" : "J62UV6D7WJ",
  "webServiceURL" : "https://example.com/passes/",
  "authenticationToken" : "vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc",
  "barcode" : {
    "message" : "123456789",
    "format" : "PKBarcodeFormatPDF417",
    "messageEncoding" : "iso-8859-1"
  },
  "locations" : [
    {
      "longitude" : -122.3748889,
      "latitude" : 37.6189722
    },
    {
      "longitude" : -122.03118,
      "latitude" : 37.33182
    }
  ],
  "organizationName" : "MyAppMatrix Coupon",
  "logoText" : "MyAppMatrix",
  "description" : "20% off any products",
  "foregroundColor" : "#ffffff",
  "backgroundColor" : "#ffffff",
  "coupon" : {
    "primaryFields" : [
      {
        "key" : "offer",
        "label" : "Any premium dog food",
        "value" : "20% off"
      }
    ],
    "auxiliaryFields" : [
      {
        "key" : "expires",
        "label" : "EXPIRES",
        "value" : "2 weeks"
      }
    ],
    "backFields" : [
      {
        "key" : "terms",
        "label" : "TERMS AND CONDITIONS",
        "value" : "Generico offers this pass, including all information, software, products and services available from this pass or offered as part of or in conjunction with this pass (the \"pass\"), to you, the user, conditioned upon your acceptance of all of the terms, conditions, policies and notices stated here. Generico reserves the right to make changes to these Terms and Conditions immediately by posting the changed Terms and Conditions in this location.\n\nUse the pass at your own risk. This pass is provided to you \"as is,\" without warranty of any kind either express or implied. Neither Generico nor its employees, agents, third-party information providers, merchants, licensors or the like warrant that the pass or its operation will be accurate, reliable, uninterrupted or error-free. No agent or representative has the authority to create any warranty regarding the pass on behalf of Generico. Generico reserves the right to change or discontinue at any time any aspect or feature of the pass."
      }
    ]
  }
}

*/


$couponPassSchema = array(
	'formatVersion' => 1,
	'passTypeIdentifier' => 'pass.myappmatrix.coupons',
	'serialNumber' => 'E5982H-I2',
	'teamIdentifier' => 'J62UV6D7WJ',
	'webServiceURL' => 'https://example.com/passes/',
	'authenticationToken' => 'vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc',
	'barcode' => array(
		'message' => '123456789',
		'format' => 'PKBarcodeFormatPDF417',
		'messageEncoding' => 'iso-8859-1'
	),
	'locations' => array(
		array(
			'longitude' => '-122.3748889',
			'latitude' => '37.6189722'
			)
	),
	'organizationName' => 'Organazintion',
	'logoText' => 'Logo',
	'description' => 'This is a coupon pass template',
	'foregroundColor' => '#ffffff',
	'backgroundColor' => '#ffffff',
	'coupon' => array(
		'primaryFields' => array(
			'key' => 'offer',
			'label' => 'Any premium dog food',
			'value' => '20% off'
		),
		'auxiliaryFields' => array(
			'key' => 'expires',
			'label' => 'Expires',
			'value' => '2 weeks'
		),
		'backFields' => array(
	 		'key' => 'terms',
			'label' => 'TERMS AND CONDITIONS',
			'value' => 'Generico offers this pass, including all information, software, products and services available from this pass or offered as part of or in conjunction with this pass (the \"pass\"), to you, the user, conditioned upon your acceptance of all of the terms, conditions, policies and notices stated here. Generico reserves the right to make changes to these Terms and Conditions immediately by posting the changed Terms and Conditions in this location.\n\nUse the pass at your own risk. This pass is provided to you \"as is,\" without warranty of any kind either express or implied. Neither Generico nor its employees, agents, third-party information providers, merchants, licensors or the like warrant that the pass or its operation will be accurate, reliable, uninterrupted or error-free. No agent or representative has the authority to create any warranty regarding the pass on behalf of Generico. Generico reserves the right to change or discontinue at any time any aspect or feature of the pass.'
		)
	)
);

echo json_encode($couponPassSchema);

?>