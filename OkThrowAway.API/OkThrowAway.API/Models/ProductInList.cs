namespace OkThrowAway.API.Models
{
    public class ProductInList
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int Amount { get; set; }
    }
}
