<?php
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<div id="tabs-3">
    <div>
        <?php
        $new_post_url = admin_url( 'post-new.php' );
        $single_content_page_url = admin_url( 'admin.php?page=wpaicg_single_content' );
        $bulk_content_page_url = admin_url( 'admin.php?page=wpaicg_bulk_content' );
        $train_your_ai_page_url = admin_url( 'admin.php?page=wpaicg_finetune' );
        $image_generator_page_url = admin_url( 'admin.php?page=wpaicg_image_generator' );
        $promptbase_page_url = admin_url( 'admin.php?page=wpaicg_promptbase' );
        $gpt_forms_page_url = admin_url( 'admin.php?page=wpaicg_forms' );
        $chatgpt_shortcode_page_url = admin_url( 'admin.php?page=wpaicg_chatgpt' );
        $chatgpt_widget_page_url = admin_url( 'admin.php?page=wpaicg_chatgpt&action=widget' );
        $chatgpt_bots_page_url = admin_url( 'admin.php?page=wpaicg_chatgpt&action=bots' );
        ?>
        <h2><?php echo esc_html__('What is AI Power', 'gpt3-ai-content-generator'); ?></h2>
        <p><?php echo esc_html__('AI Power is a WordPress plugin that allows you to generate content, images, audio, and more using the power of AI. It is a complete AI pack that includes Custom ChatGPT, Content Writer, Auto Content Writer, AI Assistant, AI Forms, Image Generator, Audio Converter, WooCommerce Product Writer, SEO optimizer, AI Training, Embeddings, Title Suggester and more that are powered by GPT-3.5 and GPT-4.', 'gpt3-ai-content-generator'); ?></p>
        <hr>
        <h2><?php echo esc_html__('How It Works', 'gpt3-ai-content-generator'); ?></h2>
        <p>
            <?php printf(
                esc_html__('Our plugin works with the OpenAI API. To use it, you need to create an account on OpenAI and %1$sobtain your API key%2$s. OpenAI provides $5 in free credit for new users. If you encounter the message %3$s"You exceeded your current quota, please check your plan and billing details."%4$s it indicates that you have exhausted your OpenAI quota and need to purchase additional credit from OpenAI.', 'gpt3-ai-content-generator'), 
                '<a href="https://beta.openai.com/account/api-keys" target="_blank">', 
                '</a>', 
                '<b>', 
                '</b>'
            ); ?>
        </p>
        <p>
            <?php echo esc_html__('Purchasing our plugin does not provide any credit from OpenAI. When you buy our plugin, you gain access to the pro features of the plugin, but it does not include any API credit. You will still need to purchase credit from OpenAI separately.', 'gpt3-ai-content-generator'); ?>
        </p>
        <p>
            <?php echo esc_html__('If you experience any slowness or content not being generated, it may be due to issues with OpenAI API services. Please wait for their services to return to normal before trying again.', 'gpt3-ai-content-generator'); ?>
        </p>
        <hr>
        <h2><?php echo esc_html__('How to Setup API Key', 'gpt3-ai-content-generator'); ?></h2>
            <p>
                <?php printf(
                    esc_html__('Watch this tutorial: %1$sHow to Setup OpenAI API Key%2$s', 'gpt3-ai-content-generator'), 
                    '<a href="https://youtu.be/d0GSPU4P7FI" target="_blank">', 
                    '</a>'
                ); ?>
            </p>
            <p>
                <?php printf(
                    esc_html__('1. Go to %1$sOpenAI%2$s and generate your API key.', 'gpt3-ai-content-generator'), 
                    '<a href="https://platform.openai.com/account/api-keys" target="_blank">', 
                    '</a>'
                ); ?>
            </p>
            <p><?php echo esc_html__('2. Go to', 'gpt3-ai-content-generator'); ?> <u><b><?php echo esc_html__('AI Engine', 'gpt3-ai-content-generator'); ?></b></u> <?php echo esc_html__('tab in this page.', 'gpt3-ai-content-generator'); ?></p>
            <p><?php echo esc_html__('3. Enter your API key and click the Save button.', 'gpt3-ai-content-generator'); ?></p>
            <p><?php echo esc_html__('4. Done!', 'gpt3-ai-content-generator'); ?></p>
        <hr>
        <h2><?php echo esc_html__('How to Add ChatGPT to Your Website', 'gpt3-ai-content-generator'); ?></h2>
            <p><?php echo esc_html__('You can create unlimited chatGPT bots that your know content.', 'gpt3-ai-content-generator'); ?></p>
            <p><?php printf(
                esc_html__('Learn how you can teach your content to the chat bot: %1$shttps://www.youtube.com/watch?v=t3UQQ5-oNso%2$s', 'gpt3-ai-content-generator'), 
                '<u><b><a href="https://www.youtube.com/watch?v=t3UQQ5-oNso" target="_blank">', 
                '</a></b></u>'
            ); ?></p>
            <p><?php echo esc_html__('There are 3 different ways to add a chatbox in your website.', 'gpt3-ai-content-generator'); ?></p>
            <b>1. <?php echo esc_html__('Using the ShortCode', 'gpt3-ai-content-generator'); ?></b>
            <p><?php printf(
                esc_html__('Go to %1$sChatGPT - ShortCode%2$s page and configure your shortcode. To add the chat bot to your website, please create a new page or post and include the shortcode %3$s[wpaicg_chatgpt]%4$s in the desired location on your site. This will allow your users to interact with the bot directly from the frontend of your website.', 'gpt3-ai-content-generator'), 
                '<u><b><a href="' . esc_html($chatgpt_shortcode_page_url) . '">', 
                '</a></b></u>', 
                '<code>', 
                '</code>'
            ); ?></p>
            <b>2. <?php echo esc_html__('Using the Widget', 'gpt3-ai-content-generator'); ?></b>
            <p><?php printf(
                esc_html__('Go to %1$sChatGPT - Widget%2$s page and configure your widget. This will allow your users to interact with the bot directly from the frontend of your website.', 'gpt3-ai-content-generator'), 
                '<u><b><a href="' . esc_html($chatgpt_widget_page_url) . '">', 
                '</a></b></u>'
            ); ?></p>
            <b>3. <?php echo esc_html__('Creating Customized Bots', 'gpt3-ai-content-generator'); ?></b>
            <p><?php printf(
                esc_html__('You can also create bots with different parameters for different pages %1$shere%2$s.', 'gpt3-ai-content-generator'), 
                '<u><b><a href="' . esc_html($chatgpt_bots_page_url) . '">', 
                '</a></b></u>'
            ); ?></p>

        <hr>
        <h2><?php echo esc_html__('How to Use Content Writer', 'gpt3-ai-content-generator'); ?></h2>
        <p><?php printf(
            esc_html__('Watch this tutorial: %1$sHow to Use Content Writer%2$s', 'gpt3-ai-content-generator'), 
            '<a href="https://youtu.be/ZBJyhr_DlxE" target="_blank">', 
            '</a>'
        ); ?></p>
        <p>1. <?php printf(
            esc_html__('Go to %1$sContent Writer Page%2$s', 'gpt3-ai-content-generator'), 
            '<u><b><a href="' . esc_html($single_content_page_url) . '">', 
            '</a></b></u>'
        ); ?></p>
        <p>2. <?php echo esc_html__('Enter your title and click the Generate button.', 'gpt3-ai-content-generator'); ?></p>
        <p>3. <?php echo esc_html__('Click the Save Draft button.', 'gpt3-ai-content-generator'); ?></p>
        <p>4. <?php echo esc_html__('If you are happy with the generated content, click the Publish button.', 'gpt3-ai-content-generator'); ?></p>
        <p>5. <?php echo esc_html__('Done!', 'gpt3-ai-content-generator'); ?></p>
        <hr>
        <h2><?php echo esc_html__('How to Use Auto Content Writer', 'gpt3-ai-content-generator'); ?></h2>
            <p>1. <?php printf(
                esc_html__('Go to %1$sAuto Content Writer Page%2$s.', 'gpt3-ai-content-generator'), 
                '<u><b><a href="' . esc_html($bulk_content_page_url) . '">', 
                '</a></b></u>'
            ); ?></p>
            <p>2. <?php printf(
                esc_html__('Make sure to complete Cron Job setup. Guide %1$shere%2$s.', 'gpt3-ai-content-generator'), 
                '<a href="https://docs.aipower.org/docs/AutoGPT/gpt-agents#cron-job-setup" target="_blank">', 
                '</a>'
            ); ?></p>
            <p>3. <?php echo esc_html__('In the Bulk Editor tab, enter your title, select Draft or Publish then hit generate button.', 'gpt3-ai-content-generator'); ?></p>
            <p>4. <?php echo esc_html__('In the CSV tab, upload a CSV with the title value in each line and hit generate button. Free plan is limited to generate 5 article at a time.', 'gpt3-ai-content-generator'); ?></p>
            <p>5. <?php echo esc_html__('In the Copy-Paste tab, copy and paste your titles and hit generate button. Free plan is limited to generate 5 article at a time.', 'gpt3-ai-content-generator'); ?></p>
            <p>6. <?php echo esc_html__('You can track your content generation status in the "Queue" tab.', 'gpt3-ai-content-generator'); ?></p>
            <p>7. <?php echo esc_html__('Done!', 'gpt3-ai-content-generator'); ?></p>
        <hr>
        <h2><?php echo esc_html__('How to Use WooCommerce Product Writer', 'gpt3-ai-content-generator'); ?></h2>
        <p><?php echo esc_html__('GPT powered AI can write your WooCommerce product title, description, short description and tags.', 'gpt3-ai-content-generator'); ?></p>
        <p><?php echo sprintf(esc_html__('Please note: the WooCommerce settings will only be visible %1$sif the WooCommerce plugin is installed%2$s on your site.', 'gpt3-ai-content-generator'), '<u>', '</u>'); ?></p>
        <p>1. <?php echo esc_html__('Go to WooCommerce > Add New Product', 'gpt3-ai-content-generator'); ?></p>
        <p>2. <?php echo esc_html__('Scroll down to the "AI Power Product Writer" section.', 'gpt3-ai-content-generator'); ?></p>
        <p>3. <?php echo esc_html__('Select all checkboxes.', 'gpt3-ai-content-generator'); ?></p>
        <p>4. <?php echo esc_html__('Click on the "Generate" button.', 'gpt3-ai-content-generator'); ?></p>
        <p>5. <?php echo esc_html__('Click on the "Save Draft" button.', 'gpt3-ai-content-generator'); ?></p>
        <p>6. <?php echo esc_html__('Done!', 'gpt3-ai-content-generator'); ?></p>
        <hr>
        <h2><?php echo esc_html__('How to Fine-Tune your model.', 'gpt3-ai-content-generator'); ?></h2>
        <p><?php echo esc_html__('You can train your own model based on an existing GPT model.', 'gpt3-ai-content-generator'); ?><p>
        <p><?php echo sprintf(esc_html__('Visit %1$sTrain Your AI%2$s page to learn more about it.', 'gpt3-ai-content-generator'), '<u><b><a href="' . esc_url( $train_your_ai_page_url ) . '">', '</a></u></b>'); ?></p>
        <hr>
        <h2><?php echo esc_html__('How to use Embeddings for Chat bot.', 'gpt3-ai-content-generator'); ?></h2>
        <p>1. <?php echo sprintf(esc_html__('First watch this video tutorial %1$shere%2$s.', 'gpt3-ai-content-generator'), '<u><b><a href="https://www.youtube.com/watch?v=t3UQQ5-oNso" target="_blank">', '</a></u></b>'); ?></p>
        <p>2. <?php echo sprintf(esc_html__('Get your API key from %1$sPinecone%2$s.', 'gpt3-ai-content-generator'), '<a href="https://www.pinecone.io/" target="_blank">', '</a>'); ?></p>
        <p>3. <?php echo esc_html__('Create an Index on Pinecone.', 'gpt3-ai-content-generator'); ?></p>
        <p>4. <?php echo sprintf(esc_html__('Make sure to set your dimension to %1$s.', 'gpt3-ai-content-generator'), '<b>1536</b>'); ?></p>
        <p>5. <?php echo sprintf(esc_html__('Make sure to set your metric to %1$s.', 'gpt3-ai-content-generator'), '<b>cosine</b>'); ?></p>
        <p>6. <?php echo esc_html__('Enter your data manually or use Index Builder to convert all your content automatically.', 'gpt3-ai-content-generator'); ?></p>
        <p>7. <?php echo esc_html__('Go to Settings - ChatGPT tab and select Embeddings method.', 'gpt3-ai-content-generator'); ?></p>

        <hr>
        <h2><?php echo esc_html__('How to Use Image Generator', 'gpt3-ai-content-generator'); ?></h2>
        <p>1. <?php echo sprintf(esc_html__('First watch this video tutorial %1$shere%2$s.', 'gpt3-ai-content-generator'), '<u><b><a href="https://www.youtube.com/watch?v=KYArfalJBbE" target="_blank">', '</a></u></b>'); ?></p>
        <p>1. <?php echo sprintf(esc_html__('Go to %1$sImage Generator%2$s.', 'gpt3-ai-content-generator'), '<u><b><a href="' . esc_url( $image_generator_page_url ) . '">', '</a></u></b>'); ?></p>
        <p>2. <?php echo esc_html__('Select DALL-E or Stable Diffusion', 'gpt3-ai-content-generator'); ?></p>
        <p>3. <?php echo esc_html__('Enter your title and click the Generate button.', 'gpt3-ai-content-generator'); ?></p>
        <p>4. <?php echo esc_html__('Select your favorite artist and style from list.', 'gpt3-ai-content-generator'); ?></p>
        <p>5. <?php echo esc_html__('Click the Generate button.', 'gpt3-ai-content-generator'); ?></p>
        <p>6. <?php echo esc_html__('Done!', 'gpt3-ai-content-generator'); ?></p>
        <p><b><?php echo esc_html__('Shortcodes', 'gpt3-ai-content-generator'); ?></b></p>
        <p><?php echo esc_html__('Copy and paste the following shortcode into your post or page to display the image generator.', 'gpt3-ai-content-generator'); ?></p>
        <p><?php echo sprintf(esc_html__('If you want to display both DALL-E and Stable Diffusion, use: %1$s', 'gpt3-ai-content-generator'), '<code>[wpcgai_img]</code>'); ?></p>
        <p><?php echo sprintf(esc_html__('If you want to display only DALL-E, use: %1$s', 'gpt3-ai-content-generator'), '<code>[wpcgai_img dalle=yes]</code>'); ?></p>
        <p><?php echo sprintf(esc_html__('If you want to display only Stable Diffusion, use: %1$s', 'gpt3-ai-content-generator'), '<code>[wpcgai_img sd=yes]</code>'); ?></p>
        <p><?php echo sprintf(esc_html__('If you want to display the settings, use: %1$s or %2$s or %3$s', 'gpt3-ai-content-generator'), '<code>[wpcgai_img settings=yes]</code>', '<code>[wpcgai_img dalle=yes settings=yes]</code>', '<code>[wpcgai_img sd=yes settings=yes]</code>'); ?></p>
        <hr>
        <h2><?php echo esc_html__('How to Use PromptBase', 'gpt3-ai-content-generator'); ?></h2>
        <p>1. <?php echo sprintf(esc_html__('First watch this video tutorial %1$shere%2$s.', 'gpt3-ai-content-generator'), '<u><b><a href="https://youtu.be/R3_siKOBnls" target="_blank">', '</a></u></b>'); ?></p>
        <p>2. <?php echo sprintf(esc_html__('Go to %1$sPromptBase%2$s.', 'gpt3-ai-content-generator'), '<u><b><a href="' . esc_url( $promptbase_page_url ) . '">', '</a></u></b>'); ?></p>
        <p>3. <?php echo esc_html__('Select a category or search for a prompt.', 'gpt3-ai-content-generator'); ?></p>
        <p>4. <?php echo esc_html__('Review the prompt and click the Generate button.', 'gpt3-ai-content-generator'); ?></p>
        <p>5. <?php echo esc_html__('Done!', 'gpt3-ai-content-generator'); ?></p>
        <hr>
        <h2><?php echo esc_html__('How to Use AI Forms', 'gpt3-ai-content-generator'); ?></h2>
        <p>1. <?php echo sprintf(esc_html__('First watch this video tutorial %1$shere%2$s.', 'gpt3-ai-content-generator'), '<u><b><a href="https://youtu.be/hetYOlR-ms4" target="_blank">', '</a></u></b>'); ?></p>
        <p>2. <?php echo sprintf(esc_html__('Go to %1$sAI Forms%2$s.', 'gpt3-ai-content-generator'), '<u><b><a href="' . esc_url( $gpt_forms_page_url ) . '">', '</a></u></b>'); ?></p>
        <p>3. <?php echo esc_html__('Design your form.', 'gpt3-ai-content-generator'); ?></p>
        <p>4. <?php echo esc_html__('Get the shortcode and embed it in your website.', 'gpt3-ai-content-generator'); ?></p>
        <p>5. <?php echo esc_html__('Done!', 'gpt3-ai-content-generator'); ?></p>
        <hr>
        <h2><?php echo esc_html__('How to Use Title Suggestion Tool', 'gpt3-ai-content-generator'); ?></h2>
        <p><?php echo esc_html__('Go to Posts or Pages. Hover over the title and click the', 'gpt3-ai-content-generator'); ?> <b><?php echo esc_html__('Suggest Title', 'gpt3-ai-content-generator'); ?></b> <?php echo esc_html__('link.', 'gpt3-ai-content-generator'); ?></p>
        <p><?php echo esc_html__('If you are using WooCommerce, you can use the', 'gpt3-ai-content-generator'); ?> <b><?php echo esc_html__('Suggest Title', 'gpt3-ai-content-generator'); ?></b> <?php echo esc_html__('link on the product page.', 'gpt3-ai-content-generator'); ?></p>
        <hr>
        <h2><?php echo esc_html__('How to Use SearchGPT', 'gpt3-ai-content-generator'); ?></h2>
        <p>1. <?php echo esc_html__('You need to enable Pinecone integration and enter some data for Embeddings. Or you can index your pages.', 'gpt3-ai-content-generator'); ?></p>
        <p>2. <?php echo esc_html__('Once step number 1 is completed then you can customize and embed short code for semantic search in your website.', 'gpt3-ai-content-generator'); ?></p>
        <p>3. <?php echo esc_html__('Copy the following code and paste it in your page or post where you want to show the search box:', 'gpt3-ai-content-generator'); ?> <code>[wpaicg_search]</code></p>
        <hr>
        <h2><?php echo esc_html__('How to Use AI Assistant', 'gpt3-ai-content-generator'); ?></h2>
        <p><?php echo esc_html__('AI Assistant is a feature that allows you to add a button to the WordPress editor that will help you to create content. You can add your own menus with your own prompts.', 'gpt3-ai-content-generator'); ?></p>
        <p><?php echo esc_html__('AI Assistant is compatible with both Gutenberg and Classic Editor.', 'gpt3-ai-content-generator'); ?></p>
        <p>1. <?php echo esc_html__('Go to your Gutenberg or Classic Edtor and look for our logo in the toolbar.', 'gpt3-ai-content-generator'); ?></p>
        <p>2. <?php echo esc_html__('Click on the logo and select the menu you want to use.', 'gpt3-ai-content-generator'); ?></p>
        <p>3. <?php echo esc_html__('Click the prompt you want to use.', 'gpt3-ai-content-generator'); ?></p>
        <p>5. <?php echo esc_html__('Done!', 'gpt3-ai-content-generator'); ?></p>
        <p><?php echo esc_html__('Please note that you need to use "Convert to Block" feature in Gutenberg Editor to use AI Assistant.', 'gpt3-ai-content-generator'); ?></p>
        <hr>
        <h2><?php echo esc_html__('Contact', 'gpt3-ai-content-generator'); ?></h2>
        <p><?php echo esc_html__('For more information about the plugin, please visit', 'gpt3-ai-content-generator'); ?> <u><b><a href="https://aipower.org/" target="_blank"><?php echo esc_html__('our website', 'gpt3-ai-content-generator'); ?></a></u></b>.</p>
        <p><?php echo esc_html__('If you have any questions, suggestion, feedback please contact me:', 'gpt3-ai-content-generator'); ?> <b>support@aipower.org</b> </p>
        <p><?php echo esc_html__('I am also on', 'gpt3-ai-content-generator'); ?> <u><b><a href="https://twitter.com/sengpt" target="_blank"><?php echo esc_html__('Twitter', 'gpt3-ai-content-generator'); ?></a></u></b>.</p>
        <p><?php echo esc_html__('You can also join our Discord community', 'gpt3-ai-content-generator'); ?> <u><b><a href="https://discord.gg/EtkpBZYY6v" target="_blank"><?php echo esc_html__('here', 'gpt3-ai-content-generator'); ?></a></u></b>.</p>
        <hr>
        <h2><?php echo esc_html__('Notes', 'gpt3-ai-content-generator'); ?></h2>
        <p><i><b>1. </b> <?php echo esc_html__('Please do not forget to get your api key from', 'gpt3-ai-content-generator'); ?> <a href="https://beta.openai.com/account/api-keys" target="_blank"><?php echo esc_html__('OpenAI', 'gpt3-ai-content-generator'); ?></a> <?php echo esc_html__('and enter it in', 'gpt3-ai-content-generator'); ?> <a href="<?php echo esc_html(admin_url('admin.php?page=wpaicg')); ?>"><?php echo esc_html__('the settings.', 'gpt3-ai-content-generator'); ?></a></i></p>
        <p><i><b>2. </b> <?php echo esc_html__('If you are using Cloudflare, please', 'gpt3-ai-content-generator'); ?> <a href="https://aipower.org/why-is-my-content-generation-process-taking-too-long/" target="_blank"><?php echo esc_html__('read this', 'gpt3-ai-content-generator'); ?></a>.</i></p>
        <p><i><b>3. </b> <?php echo esc_html__('If you are using WP Rocket caching plugin, please de-activate and re-activate your caching plugin.', 'gpt3-ai-content-generator'); ?></i></p>
        <p><i><b>4. </b> <?php echo esc_html__('If your server have a timeout limit than most probably you will not be able to generate longer contents. Please ask your hosting provider to increase server timeout limit at least to 2-3 minutes to generate longer contents.', 'gpt3-ai-content-generator'); ?></i></p>
        <p><i><b>5. </b> <?php echo esc_html__('If you are using ithemes security, please make sure to allow php calls from plugin folder, otherwise PromptBase wont work.', 'gpt3-ai-content-generator'); ?></i></p>

    </div>
</div>
