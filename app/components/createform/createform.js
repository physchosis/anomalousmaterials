(function(angular) {
    'use strict';

    function CreateFormController($http, toaster) {
        this.toaster = toaster;
        this.rootRef = new Firebase('https://scorching-inferno-2987.firebaseio.com/materials/');
         var currentUser = this.rootRef.getAuth();
        this.activeForm = 'submit_url_form';
        this.showAdvTextArea = false;
        this.displayAdvJSON = true;
        this.sourceTypes = [
            {id: 'MARKDOWN', name: 'Github (project markdown readme files etc)'},
            {id: 'FILES', name: 'File Materials'},
            {id: 'VIDEO', name: 'Videos like Youtube etc'},
            {id: 'WEBSITE', name: 'Blog on website/new website etc'},
            {id: 'EXPLOIT', name: 'Example Hak/Crack/Exploit'},
            {id: 'DEFENSE', name: 'New Patch/Defense/Block'}
        ];
        this.categoryOptions = [
            {id: 'PROJECT', name: 'Project'},
            {id:  'ARTICLE', name: 'Article'},
            {id: 'GUIDE', name: 'Guide (teach/mentor)'},
            {id: 'BLOG', name: 'BLOG To Follow'},
            {id: 'EXPLOIT', name: 'New Hak/Crack/Exploit'},
            {id: 'DEFENSE', name: 'New Patch/Defense/Block'}
      ];
        this.sampleModel = {
            "amp_author": "@SampleAuthor",
            "amp_creator": "@SampleCreatorName",
            "amp_created": "1234567890",
            "amp_status": "draft",
            "amp_title": "Give it a title like (How to transmit Radio Signals from a normal computer system Bus!)",
            "amp_background_text": "Sample background text. This is some example text that is used to display in a card and in other areas. The background text should reflect the overall background information for the material.",
            "amp_tags": "exampletags, article, guides, rants, complaints, WTF",
            "amp_category": {"id": "PROJECT", "name": "Project"},
            "amp_image_url": "https://i.ytimg.com/vi/0xRCYmbvfEs/maxresdefault.jpg",
            "amp_thumb_url": null,
            "amp_name": "Alternate title/name if there is a symbolic meaning",
            "amp_contact": {
                "twitter": "@WhoToContact",
                "email": "someone@someplace.com"

            },
            "amp_source": {
                "type":{"id": "MARKDOWN", "name": "Github (project markdown readme files etc)"},
                "created": "When was the material created? Enter EPOCH 1458385143 time",
                "updated": "When was the material last updated? Enter EPOCH 1458385143 time",
                "origin": "Enter URL or place you found it (Twitter)",
                "location": "Enter where its currently located (Github, etc)",
                "type": {"id": "MARKDOWN", "name": "Github (project markdown readme files etc)"},
                "file_name": "README.md",
                "file_desc": "Blog Entry Point",
                "file_size": "1mb",
                "integrity": "sha384-vZ2WR....",
                "crossorigin": "anonymous",
                "base_url": "https://raw.githubusercontent.com/",
                "view_url": "https://github.com/markdown-it/markdown-it",
                "file_url": "https://raw.githubusercontent.com/markdown-it/markdown-it/master/README.md",
                "base_branch": "markdown-it/markdown-it",
                "branch_name": "master",
                "branch_list": []
            }
        };
        
        this.formModel = {
            "amp_author": "",
            "amp_creator": "",
            "amp_created": new Date().getTime().toString(),
            "amp_status": "draft",
            "amp_title": "",
            "amp_background_text": "",
            "amp_tags": "",
            "amp_category": {}, //{"id": "PROJECT", "name": "Project"},
            "amp_image_url": "",
            "amp_thumb_url": null,
            "amp_name": "",
            "amp_contact": {
                "twitter": "",
                "email": ""

            },
            "amp_source": {
                "created": new Date().getTime().toString(),
                "updated": new Date().getTime().toString(),
                "origin": "",
                "location": "",
                "type": {}, //{"id": "MARKDOWN", "name": "Github (project markdown readme files etc)"},
                "file_name": "",
                "file_desc": "",
                "file_size": "",
                "integrity": "",
                "crossorigin": "",
                "base_url": "",
                "view_url": "",
                "file_url": "",
                "base_branch": "",
                "branch_name": "",
                "branch_list": []
            }
        };
        this.advancedModel = this.formModel;
        this.resetModel = {
            "amp_author": "",
            "amp_creator": "",
            "amp_created": new Date().getTime().toString(),
            "amp_status": "draft",
            "amp_title": "",
            "amp_background_text": "",
            "amp_tags": "",
            "amp_category": {}, //{"id": "PROJECT", "name": "Project"},
            "amp_image_url": "",
            "amp_thumb_url": null,
            "amp_name": "",
            "amp_contact": {
                "twitter": "",
                "email": ""

            },
            "amp_source": {
                "created": new Date().getTime().toString(),
                "updated": new Date().getTime().toString(),
                "origin": "",
                "location": "",
                "type": {}, //{"id": "MARKDOWN", "name": "Github (project markdown readme files etc)"},
                "file_name": "",
                "file_desc": "",
                "file_size": "",
                "integrity": "",
                "crossorigin": "",
                "base_url": "",
                "view_url": "",
                "file_url": "",
                "base_branch": "",
                "branch_name": "",
                "branch_list": []
            }
        };
    }
    
    CreateFormController.prototype.createAMP = function() {
        this.rootRef.push(this.advancedModel);
        this.toaster.pop('success', "Success", "Thanks for creating and submitting an anomalous material!");
        $('#createform_container').hide();
        $('#dashboard_container').show();
        this.formModel = this.resetModel;
        
    }
    
    CreateFormController.prototype.createExternalAMP = function() {
        alert('Not Ready Yet Sorry!');
    }
    CreateFormController.prototype.submitURLForm = function() {
        this.activeForm = 'submit_url_form';
        $('#submit_url_form').show();
        $('#simple_form').hide();
        $('#advanced_form').hide();
        $('#anomalous_submit_button').removeClass('active');
        $('#better_submit_button').removeClass('active');
        $('#lazy_submit_button').addClass('active');
        
        
    }
    CreateFormController.prototype.showAdvancedForm = function() {
        this.activeForm = 'advanced_form';
        $('#submit_url_form').hide();
        $('#simple_form').hide();
        $('#advanced_form').show();
        $('#anomalous_submit_button').addClass('active');
        $('#better_submit_button').removeClass('active');
        $('#lazy_submit_button').removeClass('active');
        
    }
    CreateFormController.prototype.showSimpleForm = function() {
        this.activeForm = 'simple_form';
        $('#submit_url_form').hide();
        $('#advanced_form').hide();
        $('#simple_form').show();
        $('#anomalous_submit_button').removeClass('active');
        $('#better_submit_button').addClass('active');
        $('#lazy_submit_button').removeClass('active');
        
        
    }
    CreateFormController.prototype.saveJSONChanges = function(formField) {
        var obj = JSON.parse(document.advFormJSON[formField].value);
        this.advancedModel = obj;
        this.formModel = obj;
        this.displayAdvJSON = true;
    }
    
    CreateFormController.prototype.toggleAdvJSONForm = function() {
        this.displayAdvJSON = false;
       
    }
    
    CreateFormController.prototype.prettyPrint = function() {
        //var obj = JSON.parse(this.advancedModel);
        var pretty = JSON.stringify(this.advancedModel, undefined, 4);
        $('#advanced_form').html(pretty);
    }

    angular.module('ampApp').component('ampcreator', {
        templateUrl: 'components/createform/createform.html',
        controller: CreateFormController,
        controllerAs: "vm",
        bindings: {
            userdata: '='
        }
    });
})(window.angular);