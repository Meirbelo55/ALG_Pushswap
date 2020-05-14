    <?php 
class Follow
{
    private $tofollow;
    private $befollow;
    private $bdd;
    private $veriffollow;
        public function __construct($array = [])
    {    
      $this->tofollow = $array['tofollow'] ;
      $this->befollow = $array['befollow'];
      $this->bdd = $array['bdd'] ?? NULL;
    }

    public function push()
    {
        $sql = "INSERT INTO follow(dateAbo,id_subscriber,id_subscribed)VALUES(CURDATE(),:tofollow,:befollow)";
        $req = $this->bdd->prepare($sql);
        $ret = $req->execute([":tofollow"=>$this->tofollow,":befollow"=>$this->befollow]);
    }
    public function unpush()
    {
        $sql = "DELETE FROM follow WHERE id_subscriber = :endToFollow AND id_subscribed = :endBeFollow";
        $req = $this->bdd->prepare($sql);
        $ret = $req->execute([":endToFollow"=>$this->tofollow,":endBeFollow"=>$this->befollow]);
    } 
}
try {
    $bdd = new PDO("mysql:host=localhost;dbname=tweet_academy","root","root");

  }catch(PDOException $e) {
    die("Error:". $e->getMessage());
} 

if(isset($_POST['abonner'])){
    $check_follow= new Follow(["tofollow"=>$_POST['notreid'],"befollow"=>$_POST['dugars'],"bdd"=>$bdd]);
    $check_follow->push();
    echo json_encode(true);
}
if(isset($_POST['desabonner'])){
    $check_follow= new Follow(["tofollow"=>$_POST['notreid'],"befollow"=>$_POST['dugars'],"bdd"=>$bdd]);
    $check_follow->unpush();
    echo json_encode(false);
}
// $check_follow= new Follow(["tofollow"=>$_POST['notreid'],"befollow"=>$_POST['dugars'],"bdd"=>$bdd]);
//     var_dump($check_follow->veriffollow());
//      echo json_encode(true);

  
