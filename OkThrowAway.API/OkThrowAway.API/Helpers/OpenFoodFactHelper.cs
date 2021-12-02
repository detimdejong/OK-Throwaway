﻿using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace OkThrowAway.API.Helpers
{
    public static class OpenFoodFactHelper
    { 

        public static async Task<string> OpenFoodFactAsync(string barcode)
        {
            HttpClient client = new HttpClient();

            string name = null;
            // Call asynchronous network methods in a try/catch block to handle exceptions.
            try
            {
                var url = "https://world.openfoodfacts.org/api/v0/product/";
                url += $"{barcode}.json";

                HttpResponseMessage response = await client.GetAsync(url);
                response.EnsureSuccessStatusCode();
                var responseBody = await response.Content.ReadAsStringAsync();
                // Above three lines can be replaced with new helper method below
                // string responseBody = await client.GetStringAsync(uri);
                var json = JObject.Parse(responseBody);

                var status = json["status"].ToObject<int>();
                if (status == 0)
                    return null;

                name = json["product"]["product_name"].ToString();
                
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
            }


            return name;
        }
    }
}
