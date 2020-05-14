    <?php 
    // session_start();

class Unfollow
{
    private $endToFollow;
    private $endBeFollow;
    private $bdd;
    public function __construct($array = [])
    {    
      $this->tofollow = $array['endToFollow'] ?? NULL;
      $this->befollow = $array['endBeFollow'] ?? NULL;
      $this->bdd = $array['bdd'] ?? NULL;
    }

    public function push()
    {
        $sql = "DELETE FROM abonnement WHERE id_abo = :endToFollow AND id_user = :endBeFollow";
        $req = $this->bdd->prepare($sql);
        $ret = $req->execute([":endToFollow"=>$this->endToFollow,":endBeFollow"=>$this->endBeFollow]);
    }
}
try {
    $bdd = new PDO("mysql:host=localhost;dbname=tweet_academy","root","root");

  }catch(PDOException $e) {
    die("Error:". $e->getMessage());
} 
$check_follow= new Unfollow(["endToFollow"=>"1","endBeFollow"=>"3","bdd"=>$bdd]);
$check_follow->push();
