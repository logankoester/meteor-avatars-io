# Avatars.IO for Meteor

![Avatars.IO](http://avatars.io/images/avatarsio_logo.png)

A simple [Meteor](http://meteor.com/) package for the [avatars.io](https://github.com/chute/avatars-io-node) npm module.

## Install

Using Meteor's Package System:

1. Make a new directory named `packages` in the root of your app directory (if needed).

    $ mkdir packages
		
2. Copy the contents of this repository to a folder named `avatars.io`. We use `git clone` to simplify this process.

    $ git clone git@github.com:logankoester/meteor-avatars-io.git avatars.io
		
3. Tell your Meteor app about the new package.

    $ meteor add avatars.io
		
Using [Meteorite](http://oortcloud.github.io/meteorite/):

    $ mrt add avatars.io

## Usage

Server-side only.

### Server

The same as in the Avatars.IO for Node docs (<https://github.com/chute/avatars-io-node>).

#### Example

```javascript
if (Meteor.isServer) {
  AvatarsIO.appId = "anything";
  AvatarsIO.accessToken = "exampleToken";
  result = AvatarsIO.upload("avatar.jpeg", function(err, url){
    console.log(url);
  });
}
```
