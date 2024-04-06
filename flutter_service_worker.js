'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
".git/config": "51440fa3169defec7a38fa7d324a0d14",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4fa5f2aefd599bf3c40ba17ecd4eba43",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "539a7d6bf4f19e745299a1cb1feed544",
".git/logs/refs/heads/master": "539a7d6bf4f19e745299a1cb1feed544",
".git/objects/01/8644a0675e37212dc29a70e3fb16d58d75412e": "31b6f2c6a9ba3aee52977580259c354b",
".git/objects/06/fa14da7a8d5fad914c062c36d8cb608570d633": "488a61b98a4c2de61bfbfa506b5d0fcb",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/768cf619b4d3e170c33a5fe431090b2c45b896": "0f82f07659bf5d4795af7b402dddfe48",
".git/objects/08/1cb5577c5afde5a95c0983f00c048331a1fefb": "3b385126dc9bd06b8d0a734c2062d553",
".git/objects/0d/4af5896601dc63aff6329984ec52e10a3a4d2a": "42ee6956fe6bc6b25554ca5c314553a5",
".git/objects/10/9c8c91642d15e8537f334f34f1ab8d39c2f9cc": "f22d6558b6f499449e4e60cb31f55be0",
".git/objects/13/5ac5b3f60c76506fb81b7d500b878a8b35aaa4": "0605a7e60195fa277671b7f02f42d1ff",
".git/objects/13/917a2f8a8e9784be182086e60ed10243109b26": "f4a08cd2e399fd8cf2cd83d8a4e87522",
".git/objects/13/e74cf697afcfc91c7b72ecb02ec17b681bfc12": "409a2b618b54633b5df392afe9710831",
".git/objects/14/af5dbea407d64374943b270fdfec503e9f3d06": "98b258fafeddf383bf24701a8f95c92c",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/265c06ca5020b112111ddd22fbb2aff09c4125": "a318849183f4c82bcfd2f3f67bf2c247",
".git/objects/1a/edb57199aa3f6adc4269de3a0db925ada35431": "4eba7354e40b41e4c48d66a68f2c66b0",
".git/objects/1f/e1e1ef74a056c78a48ddef48548e5345f11c0d": "efae50199b77869473a358b2b5b48ae7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/8975676f50580e4e3beeaee08a761215849794": "e02a33400bc75355341a06fe2c5a6a6a",
".git/objects/23/9789782df915726d1ef0e5f235c77cb5fce220": "25bb276187e95199a5a93705ec7efa8c",
".git/objects/23/fd2ccd6db87bab698cf769b7a404f85b4144d3": "b704326c71dfe1f50ef52a4a6c0dc318",
".git/objects/28/a84a19746b89cb8ba622e9c3a0de1df8235b37": "b308ea64eb0a01ed21c81f6fe8044b11",
".git/objects/29/4fb8407bdd83df88a7dd4a0f45fa8128e037ad": "3cd724a4385b47c3d6a705b30088cd14",
".git/objects/2a/fdc0d79214fe7af331a7aca68dde8be9edbd95": "0874192735b6708f75e7819aba2fcd15",
".git/objects/2b/c18e3934a2fd4e565534e437be5f53e8845d0a": "8243e258fff5bd661be0b9601b389dd4",
".git/objects/2e/4874f0a1fb2c6438b49a00625725b58981daf5": "6d950a76783410ff1c6902393e1e1866",
".git/objects/31/251e9ed8357f98577449b527a37a0ef56f7b5f": "dd3718658e62e5308bcc78835fa6d836",
".git/objects/32/82c9159b6a9a26a253d2ff155e59679ba03c0b": "30c56f8a57ece4d6bf0ce5c21df572b3",
".git/objects/33/2e287756a09c02df86dbe2ccc1e5312dc00222": "7e61da15cbb7cb4a18e1e67ce63aa32b",
".git/objects/36/53ab199b06818789dd16c317aece3a35640464": "d8f9ceb30925718b6c52c14abfed50e8",
".git/objects/37/fdb97d6df1d1eb230ccea018d009528034501f": "39395576614d662f6d3bdd78db1019d0",
".git/objects/38/b38e35c48c77d3db942d9c30cea4511cfeef15": "8b4e1df157959076da809494e2af0314",
".git/objects/39/2d3c4873619be5dd1a773e0708635af610648f": "39d7a7c6ee5a434a95add2d4ff379fbf",
".git/objects/3a/301c9db21e368f78dfd1612318158b8127bfd3": "07c05e3056e6bbf67042c6320da1fba1",
".git/objects/3e/75baad81bcca9fc53d7c4598c2d8758702e015": "791e2db2d9c7f52f28dbc7298d750f91",
".git/objects/43/8727e09dd732308af866c0c579669ffb054608": "0b9c494657da3ce45e475dabbe7e7e6a",
".git/objects/43/c8073c0cb1a0aafe2bbacda0800b7f9821203c": "eb6a8dbf6d75861bce5fe879c10b2cfb",
".git/objects/43/eade5e411520fe285a4dc9271ecb1b70396598": "955755e32ac4e0d8e8c22d18ee34f0ba",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/b85eab0d7a74339110c2c7a98cc2d175e93759": "b53735e72e8be86d2eec130ebb90b97c",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/247ba77b2a2a59a61cd62a551bf793f37e718b": "79bb2ecdd85bdb3c37c88211922b80fd",
".git/objects/4d/4c2720948f118b6b04ad162c475cc629780c00": "eac79af7eb5019ca5b3b57bc0322a737",
".git/objects/4f/c05f11f3d81cdfd1d479e8806bcacc8a18a61f": "10932361121c03f4c44f311e3f92b8ab",
".git/objects/52/f863e09bec656061c4ced45ca33fa4632d905d": "508bd53bc24f246119cbafc7fa7c0f3d",
".git/objects/53/00ba1264de6eb4360ac7ef9da0bd6a35ff0ee9": "a6eba9ca773143fa786faf83bea9a2f2",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/de3cf13f154506103ef7628fcac8b2a68e7684": "6160e775e2a41e88c662a7f00ac742fa",
".git/objects/55/143da813aeea4afd9ec2df6558dc3506cc0335": "fdfed9850368b325b839321268187c52",
".git/objects/55/3750283ce92d81c8eca9148ada6c560a0d1366": "58dea8a92e2b06f3974204f5f869b8da",
".git/objects/55/5a9c9acd1173b5c7e7e68451e3f8e3471e74dd": "b5e56a8fa133385306f132835448f2cb",
".git/objects/56/2abdc9856d4daf7d396f81a3663eb8dd37cb9b": "6eae8d807d79888c3958070daa0d28f5",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/870bd9f2da2018f3f6accc7fcc5c5faafcb554": "f117da73827b73f50b600db8db3f8156",
".git/objects/5c/f10808c9f96fa5c3ceecb2c8c7e48b3cbc829f": "d1c4376e0ff81875da24db14105e1f6b",
".git/objects/5e/8e32ace17603c3da736d1c8c49f5e20ab2f39e": "426a1b154c34bcfd37331a5e332496c9",
".git/objects/5f/32588d690dfdddf4790c65fc031618dc9cf2ac": "07415ebb7f63f50ccff200cf58a421cb",
".git/objects/61/8565c40c2cdf4938b2713902d14f96a223e706": "aad433d5fcc9123dcb950267e699aaf4",
".git/objects/64/1a63eb17da21f4d200ee742f8696f1b873a1a9": "dcbd847e5f586a88db58b630cf232ee4",
".git/objects/64/448fe895af0dbb17aaf979e6f5276f73266119": "02168d76be1289ffa70084222ad8e369",
".git/objects/64/65faf669b65a4dddae171a83634071fbfdf2d4": "f642071398a05df05862ee1bfab885da",
".git/objects/65/849b4346f99ff876e6b51e0244e840b52a94c1": "b431906bd5edef8262d72f32ad1ee0b3",
".git/objects/67/c97905da668d98a865373c6b2f4a6cad843618": "c14cf41d171caf21b2644edbbf9846fc",
".git/objects/69/a52f69549a7342f1db5ca3616249f29df472b2": "8377d506edc7f56cf490f53881da64e2",
".git/objects/6a/5a8f5b5b55b52a2a7ba9d7184fd47a26c03d09": "967d4b43a54e4d74925020e38b9a2b3e",
".git/objects/6a/c8a235a465876c327c0b9779c8ec8a3a887dca": "15898ebd640161f43263704319ddc666",
".git/objects/6b/016ba2b53f739e0ef2f5c4edc6dc5e9717449d": "529b178988db948114f6860f25190455",
".git/objects/6b/211d2826fc204cdb38761da816c0b5933291b8": "8fff806054d3d0ce4d858a99f9e1a020",
".git/objects/6c/5cff83bad01c0f73c593d6a47f8d5a54776069": "ca2fa5f3c7547ac2d54e9ad01d5f6578",
".git/objects/6d/1ecb8867a9a7bf449e5bbc328ef3c26f4626e2": "dbe95dfbc4390a339c24c4a1bfe9b6a4",
".git/objects/6e/471496069f164a76f63376144d307dc3955e49": "984813484585ee02f7035ecb0f809f95",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/b8815afd89d94fd0c0049d4f0b4a373467e8d5": "a8ce377b42127a2750dc8442802f4716",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/c873e10c1c19fcc45682091667af68e1a66b5f": "ed3d858ef3ae8a4bfc9261bffe36921f",
".git/objects/74/1379e811e13869f50795f9a389f5897d8237a1": "6cae85ad63709ce9a28a0c23febbe7ec",
".git/objects/75/e789477a3db59b3da40e0e8b0da223be1012fb": "ad717d8e092306a4f3ce12d126c9ae8f",
".git/objects/76/f69fc165b09f5c6108a767e2a58e3ed8c79273": "479159a0479609fcd8630ba9adf30b1f",
".git/objects/77/bcbf3a5efa3ca8d76ea3da8ad37fa18d5d9284": "a9ac929f02cd872fab57e3e68262f033",
".git/objects/77/e35fdadf77b3a88f2b58d11aab2013a217ac7e": "38f5e59fb0f191755b224ac218b321a1",
".git/objects/79/cbd53a0ae266724951430fe5503f02d0ca2c4f": "e3813fad51d0931238681645c73ee0a7",
".git/objects/7b/ad570e46638d7e41f0c245455c515323ec8eff": "a41a71ac8b9b845872473fdcb163a4cc",
".git/objects/80/0271cd7da62d125268d720aee705751fb160e2": "b1300be7d6ff0f626de2eb6431e69efa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/231ed1ad08699f2351496ec1755a0e2a4dda68": "fda874959c992be695d6b5117f233f60",
".git/objects/8a/6aaeef9a16c96532a022f3575a9bbf27357b24": "015966efc45f78f108c3ff22e6f00b8b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/94e5f757bd6332559acfa6b0b070402f091f68": "0e75b402a050927070549b73201bcff1",
".git/objects/8d/a62191c0e1ff16556e0d7ff8fb762613e5abb0": "0e6fc1dc9beeb2153090b33c7e5b28db",
".git/objects/8d/a9e1d078199b2e570f7d5f0d8db34761c7ae2a": "1e1efe1512dd22e79c88fb6b70f1d1f9",
".git/objects/90/b311346c24c4c3f7c1e761361d9bbb7afec582": "5b07697edb7e6e3e20cb0f250222d9d2",
".git/objects/93/c33adf19d462f8c9355a727ea731bcbd5656a0": "2a952c101136412b6a6a5977811a7b2a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/14cc7e71537d466f491c554873abc8907c9b16": "0997586583bcbd6a14d5c0d3873f2741",
".git/objects/99/6ca8605d288bcb0453ed94581b5ceaaaa20ff0": "a19ad0a9b16fc7e48fcaa040e464330e",
".git/objects/9a/9fb2c71fa63e4bd2261e249d78a7b2d91f1b19": "493a3a287359761b6e54e4a94a103e16",
".git/objects/9b/a326c63758acd62a61f878ab8e5730aa76c6dd": "8c0f7675e50817ecb846776ce3295cb5",
".git/objects/9c/01d0d25ce7e44a0b9627f8319bc3e8b72dceb5": "20cca1208054262a17dd14822bf88e6f",
".git/objects/9c/ec6e26a946e4a71696a2c99f384ee6dc179da1": "d0113b1e593769ce8af15a3ce5a76b39",
".git/objects/9e/e1b2aec27742de09c80e201a830418c5cd23be": "0ea73c0e8cb4e32d900e3119b1f66e65",
".git/objects/9f/ad9f0d54f9d94eb2a80d679062fee9166b4135": "5d8e84166c1821d6a69a7d06cfef759e",
".git/objects/a1/4a437c7d01a1eae2991427330e2f44baeaf8e3": "c8577ce5439e67d545e5490abbb5bff0",
".git/objects/a2/beb691bf239d1076fb3043770da9d122367b65": "69b8afc56949aec1d7c1317017ebf649",
".git/objects/a4/9924c67a071316085cb68025421eca47eb6704": "9a70c828bd4bcd3c90a7592bd93d7d71",
".git/objects/a5/20f55cbffd6fc2f0179e1ddab7b1eeec226c1f": "37806aa7593d5ca3c402c3364b28fd19",
".git/objects/a6/546645e9f41c5a0aafc2552a4580ee1d4c6164": "4bdce82e8458e137aa0541c003ae6d44",
".git/objects/a7/c797674ee484f3cb8fdc62cf72ba9691b54ba0": "0a2a0dbe12b0f71d84731c03604bb350",
".git/objects/a9/91876256c07ad2818e71f4b0df8973fcb0ce34": "8f5725d9e19ab9e25bf3faf7357fab2e",
".git/objects/ac/00a26c6b2d459aea9eb26ce9b6f97466fd4dc4": "40f0bc47beb5955a0800d0e437b5112d",
".git/objects/ac/5b078b2f068b8569e133140629fe2e15b2f577": "6fcc0ea614e0866ba5b88fd93a52e2da",
".git/objects/ad/210a3870e257f754b64456e51ef34d1e264dd6": "77bb8d806dee2077d9da8f260f9f37e9",
".git/objects/ad/418e18de56c4d68b8c9981acd07ec50706d03a": "a886df8cac8c27e5d22829444fc2f031",
".git/objects/ae/1787ccd97b60802e6920faa0ec8924dfa38b12": "078223e36d14eb791b67ee74c4b8d0ff",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/9a800b52d7ae41e648549976e7c034f58ce90c": "48a8417bbc20e0d86514fd647ecb3344",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/e1979eb0abaf18089ead7ada39d3fd5ca2cf48": "ef50826c1bb6ab62da0412b9e57a4031",
".git/objects/b7/082d78825bc64433894644e43679b72be3be51": "95167be84aa12c9cba6a4ddb59672863",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/d0693d35fc904efbf09a7e44e699ecae816aea": "6cd519cc98f64fb2f01fcb15721e07ea",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/5bf60ea86edfd26d4fb516b63b633516681dd7": "4f577dda598ce4164149224664ab4d47",
".git/objects/c1/6933bcd9c95dc080ad1aa20f0eb259091d72b7": "9923e7d38a1809b58a326e468def7e11",
".git/objects/c1/bba7433d0b5da25be05b638878afde009a3473": "ba44511ed2bd87a4c50b449d3e2b01fe",
".git/objects/c5/d1dc8d944182dfec973d11934ead04959b9b14": "5d8f0e432bb04dc20979ef2718b6f5f8",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/90d39f5028e38038f0bf11c54b230ad2fa36d3": "104842f3f9225feeb0f73a3cfd7ff820",
".git/objects/c9/0bd0a3dba992521bf5bc255d6f5a7c2bf46c35": "21944437858fefdc3dd77ae00c550e86",
".git/objects/cb/0944dcefbeff860d2b6f274af6434a843d033a": "71d7575932f3705f1f1f75ed932c13de",
".git/objects/ce/7480c616c213cc2ffdc350f65090fa74b9021c": "863e6379a5fff830d42eb34cc519d61e",
".git/objects/ce/b942861344582c4f8172f736fc9a412ea47e01": "74ea6907b45ae13a4a906902d71af0aa",
".git/objects/d1/01701a2b48239b86d2546f94a7183eac73de56": "e692c7deedbd763be7e08d34bbc7a6e3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c5a177366835c4af4bafa28a1f86ba344beae9": "0d88c560fefd920374ceba06a1a8c7d8",
".git/objects/d5/68fb462fc358f84734ddd49d181d0fd3422f64": "a7c8af84a761cb9fd7e831b3de90bdcc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/c2ea66d960bd67b20d0bcd6ecddff9abe88078": "6d55b6b473c8931b0425a418a25b1745",
".git/objects/d9/7f8df7a38c1f3c782e652263392fb741bdc30d": "0ae55c2ac396180bb2a2af2dedae1248",
".git/objects/dc/541afbfab12fa8e40cc24aa9db36df12668ac6": "3d4aa1618e2a3d1e3901befbe706b724",
".git/objects/dd/497b6ffe504933c97aba34ecf8bfc2891107e0": "1788fc33dc70eff87dd45f9bf1e97d0b",
".git/objects/dd/fe231ea03189df1db6c4f0577dbc5476550dcc": "5ffd9ac5119ef2140c147f72a3649b2e",
".git/objects/e0/54152d2db62c23c06aeeeeeca9142f3c400853": "c73501b11ef23a6cd43eed108ef9de30",
".git/objects/e0/ca7e89ff631b7e07a4590dc5938078da90c6be": "bb7130c03e95060e33ecd1a6efac7d88",
".git/objects/e2/0f81ee1ae6bc22c1173f236ee12a1322def702": "8ec3ba770a960173b1e05abba91977d3",
".git/objects/e2/48455d55e8681afd01524db820c5a3eb2e8c77": "050c54f47d8b5c060abf16720955bb80",
".git/objects/e3/d8f42180c27b955424e188da495ebca58db871": "5ded9e37c8002452605c3968c8046c12",
".git/objects/e3/e1b3c5fa623dd9e97abcea2736cebfe1359268": "2fe28cf399c54b408333fd3d68bbd707",
".git/objects/e4/3ed5232ee84fd414b4ca91813eceacfe09ebe8": "680d2ba9c3e522df428d060ff9ac8fc5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/0ee5b053ea6b14fe0161c729fa780c762edf18": "1e8664a9f1ea162332a6ed788be1650f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b972f7634dcf1d98a2b6f9455c74a549889ead": "0750aa167f8dd662dfe7601af79dff10",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/23e565acb07db7ed7f134e76c77137c16ced73": "7d3c0e6c6a64b57ba3ace35f9480e00c",
".git/objects/f2/5a271fa5c328627ecbc7511dfee029fadc0081": "410b33995a41640722e2830edfded93a",
".git/objects/f2/b5d74d3345ada5f9d647b84d5ff1a1423ff05d": "795a0d7f8a035ca5ce6884ceb290ac05",
".git/objects/f3/be7675b348b1a8da05a9458fe1144ff5563ede": "f5e67009e7345ea9afe860b0a407e5e9",
".git/objects/f7/f2d8455962409304e3be5c4bad968fedcb3c04": "529190f758b6b1724c9d8ac9c402152b",
".git/objects/f9/9963b592437d2ad5f1c5d5dd22176067010468": "5afb7428f358854952bc085769333205",
".git/objects/fa/c0c4ca45e99a7c5fee6c50b6296b04b4a6f690": "f8c8cc3e754de53458d2a9a77deb4c05",
".git/refs/heads/master": "14b6b84b312071fab06caae282ae0684",
"assets/AssetManifest.bin": "d2b72a2842466c4df9470d9aaf68f064",
"assets/AssetManifest.bin.json": "07f6f009de27ea6f9536e192abcf4094",
"assets/AssetManifest.json": "66bc9ddc7a5ca6fb6b9ff1d6f37df8bd",
"assets/assets/images/dummy.jpg": "afc17d36cd86fd3ba488a35d47974214",
"assets/assets/images/logo.png": "1a5b11f93da5885096551b4d589816ff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "33c5b4833916b6ba3c60aaaf8670a7db",
"assets/NOTICES": "b0564697c227120ae0e0b120d3357252",
"assets/packages/animated_icon/assets/activity.json": "8c7cbe8cfb2c35ccc4751194573222a3",
"assets/packages/animated_icon/assets/add.json": "b7bb068a9790921472e8c717fe5ca168",
"assets/packages/animated_icon/assets/alphabetical_sorting.json": "3f2b896ddd3d7f9d9359787eef3e846a",
"assets/packages/animated_icon/assets/angel.json": "ec103cc7e54b24104083c19f44d59ac4",
"assets/packages/animated_icon/assets/battery.json": "31acf00bd98d26ed21250a6d236ee37f",
"assets/packages/animated_icon/assets/bell.json": "668dba34f67b4ed2fe0361a4391cc4aa",
"assets/packages/animated_icon/assets/birthday_cake.json": "715293a88d166b3d166c77c51133d30e",
"assets/packages/animated_icon/assets/block_mic.json": "8688283117e0044ec752ec2421b5c7cd",
"assets/packages/animated_icon/assets/bookmark.json": "37e02b2261b19c5944081d94883e24e3",
"assets/packages/animated_icon/assets/calculator.json": "fe1abd248aff9fbc9f30a33fae8ca1e0",
"assets/packages/animated_icon/assets/calendar-tear.json": "4d6e4bf2c0bd0e845ca1ff161003ebe8",
"assets/packages/animated_icon/assets/calendar.json": "b74760ba851d59bd1acf3307bb0e9c12",
"assets/packages/animated_icon/assets/chat-message.json": "3d3b60d909f1ef7ae22be6f173003fef",
"assets/packages/animated_icon/assets/checkbox.json": "2930689eeba8a91e48be3089dccc53e1",
"assets/packages/animated_icon/assets/checkmark_ok.json": "d43791f67ed2065d8534d30ad3283365",
"assets/packages/animated_icon/assets/circles_menu_2.json": "c433cb02bf56657a42c1bb5963fa607d",
"assets/packages/animated_icon/assets/circles_menu_3.json": "5df3f9c85e0ca9e5bc56b718ece86226",
"assets/packages/animated_icon/assets/clear-symbol.json": "307c246cff2d27c944fb33cf4e24eb28",
"assets/packages/animated_icon/assets/clock.json": "ef46b5eeb36672562513d96f630ccd69",
"assets/packages/animated_icon/assets/cloud.json": "c76e77439df441152e8ab6f7b3bcd12c",
"assets/packages/animated_icon/assets/compass.json": "e29b3f473575de6c02af02da2f28690e",
"assets/packages/animated_icon/assets/confused.json": "30cbf5b57f504158300c82b37d172cf9",
"assets/packages/animated_icon/assets/cool.json": "fed987b806728dfd57109dfa8fa7e4b9",
"assets/packages/animated_icon/assets/cross.json": "4f8186dcb99e125c7cae80c8a6c7d58c",
"assets/packages/animated_icon/assets/crying.json": "57647df4780a9f4af5abc02124eb3dc7",
"assets/packages/animated_icon/assets/day_night_weather.json": "af60779aee2d8d834027bcf5ef2548c5",
"assets/packages/animated_icon/assets/demo.png": "7f9d85174d832fdd9ec3caaf583be682",
"assets/packages/animated_icon/assets/diamond.json": "e983e51ad87489050b061cc4dde04a86",
"assets/packages/animated_icon/assets/discount.json": "8c523e7761603f05583c06a17354b64d",
"assets/packages/animated_icon/assets/document.json": "05b47c11f7dcee983a0e1c24e698fcb2",
"assets/packages/animated_icon/assets/dollar.json": "41a4d363da9e51feade4d774712837b9",
"assets/packages/animated_icon/assets/down-arrow.json": "d1ce2bcb82fe6075a7ed7356da89836f",
"assets/packages/animated_icon/assets/download.json": "5af632f5d17961301b0c4eca42b79d8c",
"assets/packages/animated_icon/assets/drag-left.json": "5bc31de4409a61a7a372da9353cd2a1a",
"assets/packages/animated_icon/assets/drag-right.json": "979c0316830e0f193c4241a9e590cee0",
"assets/packages/animated_icon/assets/edit.json": "139320ad4e8be4aeb5421351744fec46",
"assets/packages/animated_icon/assets/edit_cancel.json": "4ee6ba5b65bf7d2ceb839aa990c7e90e",
"assets/packages/animated_icon/assets/edit_ok.json": "51350be0e5c184d7c524fe38f40902f4",
"assets/packages/animated_icon/assets/expensive.json": "0bb81a1ba4237d2e505c506a319f8bb2",
"assets/packages/animated_icon/assets/eye.json": "bf14651a14e319ac6d2ae8a37168e05f",
"assets/packages/animated_icon/assets/fatal-error.json": "9d82a9938e0eb82288d97f2948948c10",
"assets/packages/animated_icon/assets/favorite_folder.json": "5c5be33497e5752392a757948f81ec5c",
"assets/packages/animated_icon/assets/file.json": "3c5a683c8f0d5847e82447bc91f40d4b",
"assets/packages/animated_icon/assets/fog_weather.json": "75b3d483c81c75eb4bac6fdb79b299ef",
"assets/packages/animated_icon/assets/fullscreen.json": "04fe2e8b50ddf67d14d951414f8667c3",
"assets/packages/animated_icon/assets/gmail.json": "b37689e4d0b1a31ddb7cc6f0b08df20b",
"assets/packages/animated_icon/assets/heart.json": "4fd6bbd2a785c55c3c729217f9981cbc",
"assets/packages/animated_icon/assets/heart_2.json": "ec728a02801a28844116fb7c2b8f70d5",
"assets/packages/animated_icon/assets/home.json": "f7e97ef1b623b8db02a8db2476f37442",
"assets/packages/animated_icon/assets/hourglass.json": "372b56bb7dc3e56090a6494a7fb4d69b",
"assets/packages/animated_icon/assets/info-click.json": "9c4df7c49129c6cafa5c341026d43115",
"assets/packages/animated_icon/assets/internet.json": "de90409fd58251147830605d9896e44c",
"assets/packages/animated_icon/assets/in_love.json": "9d3e528375ee6e063e1a952aa758e67b",
"assets/packages/animated_icon/assets/iphone_spinner.json": "e0d52eb299840750b45a7e80c43e7d55",
"assets/packages/animated_icon/assets/laughing.json": "b6f5507a7f3a6bd4d606a21282615e68",
"assets/packages/animated_icon/assets/left_right.json": "5806bf128cea8c82d106f29a584c1ea0",
"assets/packages/animated_icon/assets/list.json": "fa94a8bf563855b68320e5b76aa5f764",
"assets/packages/animated_icon/assets/live-video-on.json": "638fffb60c94010b7f8d68f550eba331",
"assets/packages/animated_icon/assets/loading_1.json": "75efe45219ef6143429b4b225634449d",
"assets/packages/animated_icon/assets/loading_2.json": "f6e465a44b33233ce28a12ee76045dda",
"assets/packages/animated_icon/assets/loading_3.json": "18e23d18db166f2dff169cc1983f774f",
"assets/packages/animated_icon/assets/loading_4.json": "66268fbf3f4c7dea6a81df21a5a1e46a",
"assets/packages/animated_icon/assets/loading_5.json": "a831cd127c2d019778528f198cfefcc3",
"assets/packages/animated_icon/assets/loading_6.json": "cad4b6ccd0a1e43b9c1ed47133dabb04",
"assets/packages/animated_icon/assets/loading_7.json": "6dd95d36ea9d09924d92f18e14def8ab",
"assets/packages/animated_icon/assets/map.json": "6a4ad8816ccaa5a630279fdef4f06ebe",
"assets/packages/animated_icon/assets/map_pointer.json": "018a74eec55f8959347aefbaf10f9dcb",
"assets/packages/animated_icon/assets/menu.json": "86180df740cc1a224561e130d1b81da2",
"assets/packages/animated_icon/assets/menu_arrow.json": "16081971f09f67a26fc1b3f46b8802b1",
"assets/packages/animated_icon/assets/missed_call.json": "d69450dda953da82afa80f5e14cfcdf2",
"assets/packages/animated_icon/assets/mute.json": "a7cd312791b602731566644cda8f01fd",
"assets/packages/animated_icon/assets/neutral_face.json": "9417a2503732b758f921064ffe09a3f4",
"assets/packages/animated_icon/assets/no_comments.json": "63e9000d6324078c8c9b1848324b3d88",
"assets/packages/animated_icon/assets/numerical_sorting.json": "29ec74211cc6780607b965a97b7ddfa4",
"assets/packages/animated_icon/assets/paid.json": "6bf0ede45aa0082ff8ba2d1c7d1d4df2",
"assets/packages/animated_icon/assets/pause.json": "bd53aeea8b02f227dd372454be07e120",
"assets/packages/animated_icon/assets/play_stop.json": "bed868226187c4132aa075a1277d11b8",
"assets/packages/animated_icon/assets/play_stop_2.json": "1762898e2b28750ae79fc22bf868efc5",
"assets/packages/animated_icon/assets/power-off-button.json": "e0fa101ae10bbed6a3aa85c20c9f47aa",
"assets/packages/animated_icon/assets/print.json": "d54ba53aacc6d8fe2ea22012805d51b2",
"assets/packages/animated_icon/assets/puzzled.json": "365f0e93cef957303301c709fb4e6d63",
"assets/packages/animated_icon/assets/qr-code.json": "66255531a8987c95d9115bbc6b6c4846",
"assets/packages/animated_icon/assets/refresh.json": "0e4661e60e73fb2080d2248f1cfddfb5",
"assets/packages/animated_icon/assets/rotate.json": "0f43b79dc55b93a3d12948ccea68460d",
"assets/packages/animated_icon/assets/save-changes.json": "5813bb5a358888658a51386819169671",
"assets/packages/animated_icon/assets/settings.json": "4b6b3d0922452a469d80f1615fa1f3a0",
"assets/packages/animated_icon/assets/share.json": "bbca283e078a88e5e69608c207166403",
"assets/packages/animated_icon/assets/shocker.json": "6e697424f3c102bc2000c30245ddd14e",
"assets/packages/animated_icon/assets/sign-out.json": "f375d0e8ba61b296e4c0ae9353965773",
"assets/packages/animated_icon/assets/silent.json": "78626c6f16e9300839c518a92a19dd2d",
"assets/packages/animated_icon/assets/skateboarding.json": "36c68e00d9cf64d3f13746ccc3cd2bda",
"assets/packages/animated_icon/assets/skip_backwards.json": "2835cc51b2e2766df5a8bd7a36518312",
"assets/packages/animated_icon/assets/skip_forwards.json": "2af637238aa74085237d8554175a0d3c",
"assets/packages/animated_icon/assets/sleeping.json": "eeab4b61177e0b26feec443cda21e936",
"assets/packages/animated_icon/assets/smile.json": "dc30e2d8ae9ae4117513615780e0b452",
"assets/packages/animated_icon/assets/spinning_arrows.json": "8134b71f41e59b184d48fcd682b7ae43",
"assets/packages/animated_icon/assets/submit_progress.json": "73e31ca174258b4375dd8907bf4e598c",
"assets/packages/animated_icon/assets/thumb_up.json": "ae32094bbaf5a06c2fe785618c8ed4c5",
"assets/packages/animated_icon/assets/toggle.json": "3b2b9be0e4e36fefaa418741f3d0e26c",
"assets/packages/animated_icon/assets/tongue_out.json": "0ad19f80c100e8ebfdd6b3e23ccea745",
"assets/packages/animated_icon/assets/trash_bin.json": "d66d677f84f62f9037f321af36acbfe6",
"assets/packages/animated_icon/assets/tune.json": "4b763ed0cf954405cd7b2d501b63cd99",
"assets/packages/animated_icon/assets/unlock.json": "bda8666eab56bd80fc6af5dbe5702458",
"assets/packages/animated_icon/assets/upload.json": "0bd081997f18f3ec404d5903689b5411",
"assets/packages/animated_icon/assets/volume.json": "caf67509ea1a413e0627e5c6784b05af",
"assets/packages/animated_icon/assets/vomited.json": "1590f196364d415de15209f874366235",
"assets/packages/animated_icon/assets/walk.json": "df4aba413834afcd8af026b1749c6040",
"assets/packages/animated_icon/assets/wifi_search.json": "d37d07bb5deee76c31d7f6c383c6de22",
"assets/packages/animated_icon/assets/wink.json": "05858ea381a0523af1c93b8a045d01c6",
"assets/packages/animated_icon/assets/zoom.json": "5c12ae0d082ada5f1ad1633c556f8c0c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "23f1f1ba09322a60f50558ec4b4614a7",
"/": "23f1f1ba09322a60f50558ec4b4614a7",
"main.dart.js": "60c15fefe25e9aeb0a7279dcaa3839eb",
"manifest.json": "05a4a05c0ce9f606e938300ab9c8f51f",
"version.json": "23c8ba00984e76c53bc0cd5eef920a4b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
