using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class FinishLine : MonoBehaviour
{
    [SerializeField] float delay = 1f;  
    [SerializeField] ParticleSystem finishEffect;
   void OnTriggerEnter2D(Collider2D other) 
   {
        if(other.tag == "Player")
        {
            Invoke("ReloadScene",delay);
            finishEffect.Play();
            GetComponent<AudioSource>().Play();
        }
   }

   void ReloadScene()
   {
        SceneManager.LoadScene(0);
   }
}
