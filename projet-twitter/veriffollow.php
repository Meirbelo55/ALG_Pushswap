<?php
class Follow
{
	private $tofollow;
	private $befollow;
	public $bdd;
	public function __construct($array)
	{
		$this->tofollow = $array['tofollow'];
		$this->befollow = $array['befollow'];
		$this->bdd = $array['bdd'];
	}

public function veriffollow()
  {
    $sql = "SELECT * FROM follow WHERE id_subscriber = :idsub AND id_subscribed = :idsubed";
    $req = $this->bdd->prepare($sql);
    $req->execute([":idsub"=>$this->tofollow,"idsubed"=>$this->befollow]);
    $result = $req->rowCount();
    if($result == 0){
    	 echo json_encode(true);
    } elseif ($result > 0) {
    	 echo json_encode(false);
    }
  }	
}
try {
	  $bdd = new PDO('mysql:host=localhost;dbname=tweet_academy',"root","root");
	  $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}	catch(PDOException $e) {

	die("Error:". $e->getMessage());
}

$re = new Follow(["tofollow"=>$_POST['notreid'],"befollow"=>$_POST['dugars'],"bdd"=>$bdd]);
$re->veriffollow();