#The Anomalous Materials Project
>Exceptional things come from abnormal, atypical, irregular, aberrant, freakish, odd, bizarre, peculiar, unusual, and out of the ordinary HUMANS! 


#What is it?

First check out the following link for more information:
http://physchosis.github.io/anomalousmaterials/

>The goal of this project is to develop a way of sharing security informational materials and artifacts in a new way. 
There is also a simple collaborative app where people can submit new materials, attack and defend guides and articles across the Security Community. Notice I didn't use the word Cyber? Its because a printed 3D Key of a TSA lock...Is not Cyber related....
So whether you have a new project that sends out AM frequencies on a system bus, a new 3D printed project for creating keys, an awesome article, guide, or tutorial, or a new project that defends against attacks the goal is to provide a way of sharing this information, in a somewhat distributed way. 
#Uh......this already exists.

>Sure there are thousands of blogs, content management systems, apps, major news outlets, youtube, and daily emails or tools that someone could use to bookmark everything, but wouldn't it be great if we had a repo of all of this wonderful knowledge wrapped up with a nice bow on it?


#Why not just use a booksharing utility or something of that sort?
>There are a variety of answers for this. The longer term goal is to be able to do some things differently. As the web progresses, things change, and with that change sometimes things go away, sometimes things stay the same. One thing that can get concerning at times is relying on things to always be there when they may not be.
So some longer term goals are to provide tidbits of informational artifacts, provided in an open way, that can be accessed, and possibly cached, and linked. Like linked data. To understand this better, today we rely strictly on major search engines, CDN providers, and the like in order to keep informational artifacts available but maybe there is an alternative approach. One example of this is with LinkedData (Semantic Web) and another is with Information Centric Networking, where the goal is that the network fabric itself, becomes the storage engine.
as seen https://en.wikipedia.org/wiki/Linked_data and http://tools.ietf.org/html/rfc7476


#Status

>This project is just getting started and may not go anywhere. Help would be much appreciated.

#How does it work?
>There is a main website which currently displays cards. These cards pull metadata JSON information from github repositories in order to display these cards. 
The metdata information determines things like who created it, what it is, where can you find information about it, what type of material it is, and so forth. The plan
is to come up with a variety of different metadata JSON attributes along with different displays depending on the type of the data. 


#How do I create a material?
>There are a few different ways that anomalous materials can be created. The first recommendation would be to read this README file associated with the main gh-pages branch. This will actually be moved to the amp-materials branch and have its own anomalous material metadata file associated.
>Not So Technical Way - A simple way is to just use the form on the site to create a new material. The problem is that this will limit you to what features you can use, along with being able to handle updating information regarding the actual material. 

>Technical Way

Option 1 - Fork/Clone amp-materials repo, add anomalous metadata file, submit pull request
For Github users that just want to clone the amp-materials branch, make your change, and submit a pull request simply clone the amp-materials repository, take one of the examples, copy and modify the meta-data, and then just submit a pull request. The only downside to doing this is that the change will have to be accepted into the main trunk line. Im not a git expert so there might be ways of doing this differently like adding submodules, and thoughts here would be appreciated.

Option 2 - For users that want to host their own anomalous metadata file either in their own repo or elsewhere.
If you are using github, you can simply create a new repo, or add the metadata file to an existing repo and then submit it using the form below. If you are not using github, and you are hosting the metadata file on a server with CORS enabled, then you must provide access for the anomalous materials domain. This is only temporary as there is currently no server backend to process outbound requests. In the future I may add other methods to submit depending on your feedback. For information on CORS see the wikipedia article or determine how to add the appropriate cross origin resource headers for your specific environment.

The following are steps if you want to host your own anomalous metadata file.

~$git clone https://github.com/physchosis/anomalousmaterials.git

2) If you are not using github
GOTO step 3...add a metadata json file with your material information onto your server and submit it in the form below

3) Add a anomalous material metadata JSON file like below (checkout the examples file for more details)
Hopefully these are self explanitory if not check out the README which also contains the schema information please create an issue

```
~$cat <<EOF >amp-whatever.json

{
  "amp_author": "@authorOFMaterialNameTeamWTFUwant",
  "amp_creator": "@creatorThatIsAddingIt",
  "amp_created": "1234567890",
  "amp_status": "draft",
  "amp_title": "Attack surfaces for zeus botnet",
  "amp_background_text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  "amp_tags": "article, guides, rants, complaints",
  "amp_category": {
    "id": "PROJECT",
    "name": "Project"
  },
  "amp_image_url": "https://i.ytimg.com/vi/0xRCYmbvfEs/maxresdefault.jpg",
  "amp_thumb_url": null,
  "amp_name": "Guide To Attack Surfaces",
  "amp_contact": {
    "twitter": "@author",
    "email": "someone@someplace.com"
  },
  "amp_source": {
    "created": "1458385143",
    "updated": "1458385143",
    "origin": "Twitter",
    "location": "Github",
    "type": {
      "id": "MARKDOWN",
      "name": "Github (project markdown readme files etc)"
    },
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
}
EOF

```
4) Submit your anomalous metadata file URL.
Enter the url to anomalous materials amp-<whateveryouwant>.json file 
https://github.com/someone/somebranch/amp-whateveryouwant.json
Submit



#Material Metadata Example:
For this project I am currently using JSON in order for the metadata to be both stored and displayed etc.
If there are better ideas please submit them as issues, submit pull requests, ask to help/join up, or provide feedback.
Might be interesting at creating a Anomalous Material article, blog, or guide on how to improve this concept.

The following below is a sample metadata JSON file and Schema (I call these an amp material) for the time being.
Comments are in-line although if anyone is interested in helping it might be cool to have a tutorial, guide, or something of that sort.

```
{
  "amp_author": "@authorOFMaterialNameTeamWTFUwant", // The Original Author 
  "amp_creator": "@creatorThatIsAddingIt", // The human that added it
  "amp_created": "1234567890", // when was it created EPOCH
  "amp_status": "draft", // options draft, published, review
  "amp_title": "Attack surfaces for zeus botnet", // Title of material
  "amp_background_text": "The background information",
  "amp_tags": "article, guides, rants, complaints", // Tags Comma Delimited
  "amp_category": {  // Categories are explained below as certain actions are taken based on them
    "id": "PROJECT",
    "name": "Project"
  },
  "amp_image_url": "https://i.ytimg.com/vi/0xRCYmbvfEs/maxresdefault.jpg", // Image for display
  "amp_thumb_url": null, // Thumbnail image if you want
  "amp_name": "Guide To Attack Surfaces", // Alternate Name other than Title
  "amp_contact": { // Who to contact, optional
    "twitter": "@author",
    "email": "someone@someplace.com"
  },
  "amp_source": { // The below is specifically about the material source
    "created": "1458385143", // EPOCH seconds
    "updated": "1458385143", // EPOCH seconds
    "origin": "Twitter", // Where did it originate was it found twitter, youtube, darknet, back alley, trashcan
    "location": "Github", // Where can we find it
    "type": { // Types are almost the same as categories, but are used to trigger certain displays and to do things
      "id": "MARKDOWN",
      "name": "Github (project markdown readme files etc)"
    },
    "file_name": "README.md", // Based on the type lets say a MARKDOWN file or a regular file this would be the name
    "file_desc": "Blog Entry Point", // This would be the file desc
    "file_size": "1mb", // File size would be awesome
    "integrity": "sha384-vZ2WR....", // An integrity check would rock
    "crossorigin": "anonymous", // Can we get access to it on the client side (optional)
    "base_url": "https://raw.githubusercontent.com/", // Base URL like you see here
    "view_url": "https://github.com/markdown-it/markdown-it", // View URL like a place to view it on the web
    "file_url": "https://raw.githubusercontent.com/markdown-it/markdown-it/master/README.md", // Full URL to file
    "file_list": [], // File List
    "base_branch": "markdown-it/markdown-it", // Base branch for example
    "branch_name": "master", // Branch name to look at
    "branch_list": [] // list of branches
  }
}
```

##Material Metadata Categories vs Source Types

>Why have duplicate categories and source types? The primary reason currently is to separate what could be used as a filtering
category versus what would be used for actionable data. For instance, Lets say you have a Guide that you are creating to mentor someone 
and maybe you are using Github to store the actual guide. The category would be GUIDE but the source type would be MARKDOWN. The reason is that 
it allows us to add more categories or source types and do things later. 

>The following are examples of Category Options. I would really enjoy suggestions here on what to add.
        ```[
            {id: 'PROJECT', name: 'Project'},
            {id:  'ARTICLE', name: 'Article'},
            {id: 'GUIDE', name: 'Guide (teach/mentor)'},
            {id: 'BLOG', name: 'BLOG To Follow'},
            {id: 'EXPLOIT', name: 'New Hak/Crack/Exploit'},
            {id: 'DEFENSE', name: 'New Patch/Defense/Block'}
      ];```

>The following are examples of Source Types for Material Sources:

        ```[
            {id: 'MARKDOWN', name: 'Github (project markdown readme files etc)'},
            {id: 'FILES', name: 'File Materials'},
            {id: 'VIDEO', name: 'Videos like Youtube etc'},
            {id: 'WEBSITE', name: 'Blog on website/new website etc'},
            {id: 'EXPLOIT', name: 'Example Hak/Crack/Exploit'},
            {id: 'DEFENSE', name: 'New Patch/Defense/Block'}
        ];```
        
>Quick example...if a source type was MARKDOWN then we would fetch the markdown README and try to display it. If the source type was say a VIDEO then we might try to embed the video (depending on where its coming from)
If the source type was say a new schematic on taking over _________ like controlling a boat remotely, then most likely we would just use the metadata and point to the repo, place, etc where the material is located.

##Authors and Contributors

@physchosis

