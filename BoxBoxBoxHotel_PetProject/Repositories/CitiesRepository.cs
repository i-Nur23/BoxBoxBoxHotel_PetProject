namespace BoxBoxBoxHotel_PetProject
{
    public class CitiesRepository
    {
        private readonly AppDbContext context;

        public CitiesRepository(AppDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<string> GetCoatOfArmsBytes()
        {
            var coatOfArms = new List<string>();

            foreach (var item in context.Cities)
            {
                if (item != null && item.CoatOfArms != null)
                {
                    var base64 = Convert.ToBase64String(item.CoatOfArms);
                    coatOfArms.Add(String.Format("data:image/png;base64,{0}",base64));   
                }
            }

            return coatOfArms;
        }
    }
}
