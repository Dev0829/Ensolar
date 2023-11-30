<?php
defined('ABSPATH') or die("you do not have access to this page!");
$this->fields = $this->fields + array(
        'has-wizard-been-completed-processing-us' => array(
            'step' => 1,
            'section' => 1,
            'source' => 'processing-us',
            'type' => 'text',
            'default' => '',
			'help' => cmplz_sprintf( __( "To learn what Processing Agreements are and what you need them for, please read this  %sarticle%s", 'complianz-gdpr' ),'<a href="https://complianz.io/what-are-processing-agreements">', '</a>' ),
            'callback' => 'is_wizard_completed',
        ),
        'processor-activities-us' => array(
            'step' => 2,
            'section' => 1,
            'source' => 'processing-us',
            'translatable' => true,
            'type' => 'text',
            'default' => '',
            'required' => true,
            'tooltip' => __('E.g. hosting, data storage, payment processing, sending newsletters', 'complianz-gdpr'),
            'label' => __("Describe briefly what activities your Service Provider will perform.", 'complianz-gdpr'),
        ),
        'data-from-whom-us' => array(
            'step' => 2,
            'section' => 1,
            'source' => 'processing-us',
            'type' => 'multicheckbox',
            'default' => '',
            'required' => true,
            'label' => __("Who's data will be processed?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('Customers', 'complianz-gdpr'),
                '2' => __('Employees', 'complianz-gdpr'),
                '3' => __('Suppliers', 'complianz-gdpr'),
                '4' => __('Account holders', 'complianz-gdpr'),
                '5' => __('Job applicants', 'complianz-gdpr'),
                '6' => __('Website visitors', 'complianz-gdpr'),
                '7' => __('Patients', 'complianz-gdpr'),
                '8' => __('Leads', 'complianz-gdpr'),
                '9' => __('Members', 'complianz-gdpr'),
                '10' => __('Tenants', 'complianz-gdpr'),
                '11' => __('Other:', 'complianz-gdpr'),
            ),
        ),
        'data-from-whom-other-us' => array(
            'step' => 2,
            'section' => 1,
            'source' => 'processing-us',
            'type' => 'text',
            'translatable' => true,
            'default' => '',
            'required' => true,
            'label' => __("Which categories can the persons be placed in?", 'complianz-gdpr'),
            'help' => __('Multiple categories should be separated with a semi-colon.' , 'complianz-gdpr'),
            'condition' => array('data-from-whom-us' => '11'),
        ),
        'what-kind-of-data-us' => array(
            'step' => 2,
            'section' => 1,
            'source' => 'processing-us',
            'type' => 'multicheckbox',
            'default' => '',
            'required' => true,
            'label' => __("What kind of data will be processed by the data processor?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('Name Address City', 'complianz-gdpr'),
                '2' => __('Phone number', 'complianz-gdpr'),
                '3' => __('Email address', 'complianz-gdpr'),
                '4' => __('Browse history', 'complianz-gdpr'),
                '5' => __('IP Address', 'complianz-gdpr'),
                '6' => __('Social Media accounts', 'complianz-gdpr'),
                '7' => __("Photo's", 'complianz-gdpr'),
                '8' => __('Curriculum Vitae', 'complianz-gdpr'),
                '9' => __('Birth Date', 'complianz-gdpr'),
                '10' => __('Marital status', 'complianz-gdpr'),
                '11' => __('Financial data', 'complianz-gdpr'),
                '12' => __('Medical data', 'complianz-gdpr'),
                '13' => __('Other:', 'complianz-gdpr'),
            ),
        ),
        'what-kind-of-data-other-us' => array(
            'step' => 2,
            'section' => 1,
            'source' => 'processing-us',
            'type' => 'text',
            'translatable' => true,
            'default' => '',
            'required' => true,
            'label' => __("Which kind of personal data will be processed?", 'complianz-gdpr'),
            'help' => __('Multiple categories should be separated with a semi-colon.' , 'complianz-gdpr'),
            'condition' => array('what-kind-of-data-us' => '13'),
        ),
        'allow-outside-us' => array(
            'step' => 2,
            'section' => 1,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'required' => true,
            'label' => __("Do you allow data to be processed outside the United States?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('No, processing outside the United States is not allowed.', 'complianz-gdpr'),
                '2' => __('Yes, but only when the countries share the same security levels concerning privacy.', 'complianz-gdpr'),
            ),
        ),
        // CONTACTGEGEVENS PERSOON - CONTACT DETAILS

        'name_of_processor-us' => array(
            'step' => 2,
            'section' => 2,
            'source' => 'processing-us',
            'type' => 'text',
            'default' => '',
            'required' => true,
            'label' => __("What is the name of the Service Provider?", 'complianz-gdpr'),
        ),

        // HANDLING REQUESTS FROM THOSE involved

        'deal_with_requests-us' => array(
            'step' => 2,
            'section' => 2,
            'source' => 'processing-us',
            'type' => 'multicheckbox',
            'default' => 1,
            'required' => true,
            'label' => __("How will you deal with requests from those involved?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('I will deal with requests from those involved, The Service Provider will forward everything to me.', 'complianz-gdpr'),
                '2' => __('The Service Provider may charge additional costs that it incurs in this context.', 'complianz-gdpr'),
            ),
            'tooltip' => __('An individual can make a subject access request to you verbally or in writing. It can also be made to any part of your organization (including by social media) and does not have to be to a specific person or contact point.','complianz-gdpr'),
        ),
        'security_measures-us' => array(
            'step' => 2,
            'section' => 2,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'required' => true,
            'label' => __("Which security measures should the Service Provider take?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('The Service Provider must at least be able to meet the legal minimum.', 'complianz-gdpr'),
                '2' => __('The Service Provider must comply with a separate security protocol.', 'complianz-gdpr'),
                '3' => __('I want to be able to choose the required security measures myself.', 'complianz-gdpr'),
            ),
        ),
        'security-protocol-where-us' => array(
            'step' => 2,
            'section' => 2,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'label' => __("Where can people find this security protocol?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('The protocol is annexed to this agreement.', 'complianz-gdpr'),
                '2' => __('The protocol can be found online via an URL', 'complianz-gdpr'),
            ),
            'condition' => array('security_measures-us' => '2'),
        ),
        'security-protocol-where-url-us' => array(
            'step' => 2,
            'section' => 2,
            'source' => 'processing-us',
            'type' => 'url',
            'default' => '',
            'label' => __("What is the URL?", 'complianz-gdpr'),
            'condition' => array('security-protocol-where-us' => '2'),
        ),
        'processing-security-measures-us' => array(
            'step' => 2,
            'section' => 2,
            'source' => 'processing-us',
            'type' => 'multicheckbox',
            'default' => '',
            'label' => __("Select the required security standard or measure.", 'complianz-gdpr'),
            'condition' => array('security_measures-us' => '3'),
            'options' => array(
                '1' => __('Username and Password', 'complianz-gdpr'),
                '2' => __('DNSSEC', 'complianz-gdpr'),
                '3' => __('TLS / SSL', 'complianz-gdpr'),
                '4' => __('DKIM, SPF en DMARC', 'complianz-gdpr'),
                '5' => __('Physical security measures of systems which contain personal  data.', 'complianz-gdpr'),
                '6' => __('Security software', 'complianz-gdpr'),
                '7' => __('ISO27001/27002 certified', 'complianz-gdpr'),
                '8' => 'HTTP Strict Transport Security',
                '9' => 'X-Content-Type-Options',
                '10' => 'X-XSS-Protection',
                '11' => 'X-Frame-Options',
                // '12' => 'Expect-CT',
                // '13' => 'No Referrer When Downgrade header',
                '14' => 'Content Security Policy',
                '15' => __('STARTTLS and DANE','complianz-gdpr'),
                '16' => 'WPA2 Enterprise',
                '17' => __('Other:', 'complianz-gdpr'),

            ),
        ),
        'processing-security-measures-other-us' => array(
            'step' => 2,
            'section' => 2,
            'source' => 'processing-us',
            'type' => 'textarea',
            'default' => '',
            'label' => __("Other:", 'complianz-gdpr'),
            'condition' => array('processing-security-measures-us' => '17'),
        ),
        // RIGHT OF AUDIT
        'when-audit-us' => array(
            'step' => 2,
            'section' => 3,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'required' => true,
            'condition' => array('audit-us' => 'NOT 3'),
            'label' => __("When can you, as the data controller, carry out audits?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('If similar reports give no or insufficient clarification.', 'complianz-gdpr'),
                '2' => __('With a reasonable suspicion of abuse,', 'complianz-gdpr'),
                '3' => __('Once every quarter and more often with reasonable suspicion of abuse.', 'complianz-gdpr'),
                '4' => __('Once every year and more often with reasonable suspicion of abuse.', 'complianz-gdpr'),
            ),
        ),

        'audit-us' => array(
            'step' => 2,
            'section' => 3,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'required' => true,
            'label' => __("Can the audit be carried out by an independent Third Party?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('The audit may be performed by an independent Third Party.', 'complianz-gdpr'),
                '2' => __('Only I can perform audits', 'complianz-gdpr'),
                '3' => __('An audit is not necessary', 'complianz-gdpr'),
            ),
        ),


        'what-do-with-findings-us' => array(
            'step' => 2,
            'section' => 3,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'required' => true,
            'condition' => array('audit-us' => 'NOT 3'),
            'label' => __("What should be done with the findings of the audit?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('The Service Provider is obliged to implement the findings as quickly as possible.', 'complianz-gdpr'),
                '2' => __('The parties should decide together what to do with these findings.', 'complianz-gdpr'),
            ),
        ),

        'audit-costs-us' => array(
            'step' => 2,
            'section' => 3,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'required' => true,
            'condition' => array('audit-us' => 'NOT 3'),
            'label' => __("Who is responsible for any audit costs?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('Data controller', 'complianz-gdpr'),
                '2' => __('Service Provider', 'complianz-gdpr'),
                '3' => __('The Service Provider, in case of non - trivial violations of the obligations from the processor agreement. Otherwise the data controller.', 'complianz-gdpr'),
            ),
        ),

        // DATA breach
        'when-informed-us' => array(
            'step' => 3,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'required' => true,
            'label' => __("How quickly should the Data Controller be informed of a security breach?", 'complianz-gdpr'),
            'options' => array(
                '1' => __('Immediately (without unreasonable delay) after the security breach has become known to the Service Provider.', 'complianz-gdpr'),
                '2' => __('Immediately (without unreasonable delay), within 24 hours after the security breach has become known to the Service Provider.', 'complianz-gdpr'),
                '3' => __('Immediately (without unreasonable delay), within 36 hours after the security breach has become known to the Service Provider.', 'complianz-gdpr'),
            ),
        ),

        'maximize-liability-us' => array(
            'step' => 3,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'options' => $this->yes_no,
            'label' => __("Do you want to limit the liability of the Service Provider?", 'complianz-gdpr'),
        ),

        'amount-liable-us' => array(
            'step' => 3,
            'source' => 'processing-us',
            'type' => 'text',
            'default' => '',
            'placeholder' => __('0.00 $','complianz-gdpr'),
            'required' => true,
            'condition' => array('maximize-liability-us' =>'yes'),
            'label' => __("What is the maximum liability for violations of the processor agreement?", 'complianz-gdpr'),
        ),

        'insurance-us' => array(
            'step' => 3,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'required' => true,
            'label' => __("Should the Service Provider take out liability insurance?", 'complianz-gdpr'),
            'options' => $this->yes_no,
        ),



        'max_cost_of_insurance-us' => array(
            'step' => 3,
            'source' => 'processing-us',
            'type' => 'text',
            'default' => '',
            'required' => true,
            'placeholder' => __('0.00 $','complianz-gdpr'),
            'label' => __("What is the minimum amount the insurance should cover?", 'complianz-gdpr'),
            'condition' => array(
                'insurance-us' => 'yes',
                'maximize_cost_of_insurance-us'=>'yes'
            ),
        ),
        'insurance_conditions-us' => array(
            'step' => 3,
            'source' => 'processing-us',
            'type' => 'multicheckbox',
            'default' => '',
            'required' => true,
            'condition' => array('insurance-us' => 'yes'),
            'label' => __("The insurance conditions must provide at least cover for the following claims:", 'complianz-gdpr'),
            'options' => array(
                '1' => __('Data breaches.', 'complianz-gdpr'),
                '2' => __('Not complying to the processing data contract.', 'complianz-gdpr'),
            ),
        ),
        'access-to-policy-us' => array(
            'step' => 3,
            'source' => 'processing-us',
            'type' => 'radio',
            'default' => '',
            'required' => true,
            'condition' => array('insurance-us' => 'yes'),
            'options' => $this->yes_no,
            'label' => __("Access to the insurance policy can be demanded.", 'complianz-gdpr'),
        ),
        'finish_setup_processing-us' => array(
            'step' => '4',
            'source' => 'processing-us',
            'callback' => 'processing_last_step',
        ),
    );
