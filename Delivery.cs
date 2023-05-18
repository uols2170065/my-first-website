using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Delivery : MonoBehaviour
{
    bool hasPackage;
    [SerializeField]float delay = 0.5f;
    [SerializeField] Color32 hasPackageColor = new Color32(1,1,1,1);
    [SerializeField] Color32 noPackageColor = new Color32(1,1,1,1);

    SpriteRenderer spriteRenderer;
    void Start()
    {
        spriteRenderer = GetComponent<SpriteRenderer>(); //SpriteRenderer이라는 component를 가지고 와라
    }
    void OnCollisionEnter2D(Collision2D other) 
    {
        Debug.Log("쿵");   
    }
    void OnTriggerEnter2D(Collider2D other) 
    {
        if(other.tag == "Package" && !hasPackage)
        {
            Debug.Log("물품 픽업 완료!");
            hasPackage = true;
            spriteRenderer.color = hasPackageColor;
            Destroy(other.gameObject,delay);
            
        }
        if(other.tag == "Customer" && hasPackage)
        {
            Debug.Log("배달 끝!");
            hasPackage = false;
            spriteRenderer.color = noPackageColor;
        }
       
    }
}
