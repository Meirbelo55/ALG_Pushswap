<?php
class MyFollowing
{
   private $bdd;
   private $toFollow;
   private $beFollow;

  	public function __construct()
 	{
	   	$this->toFollow = ['MyFollowing'];
	   	$this->beFollow = ['MyFollowers'];
	   	$this->bdd = $array['bdd'];
    }

    public function connexion()
    {
	   	try 
	   	{
		 	$this->bdd = new PDO('mysql:host=localhost;dbname=tweet_academy',"root","root");
		 	$this->bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}	
		catch(PDOException $e)
		{
			die("Error:". $e->getMessage());
		}
	}
   	public function MesAbonnements()
   	{
   		$this->connexion();
   		$sql = "SELECT username FROM user INNER JOIN follow ON user.id_user=follow.id_subscribed WHERE id_subscriber = 2";
   		$req = $this->bdd->prepare($sql);
    	$req->execute([]);
    	$result = $req->fetchall();
    	echo json_encode($result);
   }
  

}

$re = new MyFollowing();
$re->MesAbonnements();