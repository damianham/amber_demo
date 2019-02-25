
rm -rf $1
amber new $1 -d sqlite -r damianham/amber_demo
cd $1

amber g auth User
amber g scaffold Account user:reference contact:reference balance:real active:boolean
amber g scaffold Contact firstname:string lastname:string email:string phone:string url:string credit_card:string age:int gender:string
amber g scaffold Category title:string
amber g scaffold Post title:string description:text category:reference user:reference
amber g scaffold Comment body:text post:reference user:reference

cp ../seeds.cr db/seeds.cr

amber db migrate seed

amber watch
